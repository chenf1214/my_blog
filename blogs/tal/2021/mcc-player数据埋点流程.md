---
title: 数据埋点 上报 流程
date: 2021-4-23
tags:
 - tag3
categories:
 -  tal
---

## mccplayer 埋点流程 或 运行时序

```ts
// 这里我们以 onStatusChange 实际是 statusChange 为例
我们需要关注3个文件 
1. course-bridge 的index.ts 文件 （与课件的通信） 在这里会建立 message 监听 ，然后课件不同的事件触发不同的方法（是向cw-service来emit还是callPromisify/resolve/reject来处理）
2. service 下 cw-service.ts文件 （课件和上报服务）在这里.on 监听 course-bridge的emit 并触发this.options 下的相应方法 （发现options是在new时传入）
3. player下 mcc-player.ts 文件 （播放器基础类）发现在这里new CWService() 并init传入 options的所有方法

// 具体实现
//1.course-bridge
...
// message 监听
window.removeEventListener('message', CourseBridge.__messageHandlerBinded);
CourseBridge.__messageHandlerBinded = this.messageHandler.bind(this);
window.addEventListener('message', CourseBridge.__messageHandlerBinded);

private messageHandler(e: MessageEvent) {
    switch (type) {
      case CoursewareEvent.Ready:
        this.handleReady();
        break;
        ...
// 向cw-service emit
private handleReady() {
    this.emit(CoursewareEvent.Ready);
}

//2.cw-service
public init(options: CWInitParams): void {
    this.options = options;
    ...
    this.createCWDom();
    ...
    this.initBridge();
}
...
private initBridge() {
    this.courseBridge = new CourseBridge(this.cwDom);
    ...
    this.courseBridge.on(CoursewareEvent.Ready, this.options.onReady);
// 好 ，那现在的问题就是 找到new CWService() 并init时的部分

// 3. mcc-player
public init(params: InitParam): void {
    ...
    this.cwService = new CWService();
    const cwParams: CWInitParams = this.getCWServiceInitParam(params);
    this.cwService.init(cwParams);
    this.checkoutCWUrl();
  }
protected getCWServiceInitParam(params: InitParam): CWInitParams {
    return {
      ...
      onReady: this.handleCWReady.bind(this),

protected handleCWReady(): void {
    ...
    this.onEvent(ItsEvent.StatusChange, {
      status: ItsStatus.Ready,
      data: {
        cwStatus,
      },
    });
    ...
  }

总结，1，course-bridge 被 触发emit 
     2，cw-service .on 并执行 具体方法
     3，具体方法在这里实现 形成闭环（通过这里上报数据）  
```


```ts
//1. 初始化mccplayer init（params: InitParam）中 
// getCWServiceInitParam 这个直接return一些配置 
1.const cwParams: CWInitParams = this.getCWServiceInitParam(params);
// 我的理解这里通过
getCWServiceInitParam(){
return {
      ...
      onCatalogueChange: this.onCatalogueChange.bind(this),
      ...
    }
}
protected onCatalogueChange(catalogInfo: ItsPage[]): boolean {
    ...
    this.onEvent(ItsEvent.CatalogueChange, { pages: catalogInfo });
    ...
}
// 来建立一些 event的监听 进而触发 上报
2. 通过1 我们拿到了cwParams 这个cwservice init 所需要的参数
于是 this.cwService.init(cwParams); 初始化他

这里面init了  createCWDom() 
emmm 创建了iframe
然后 createCWDom() 里调用了 setCWUrl()

setCWUrl()里不清楚具体 ，但是await了 cwPages
this.handleCatalogue(cwPages);
emm 这部我的理解 是拿到了 handleCatalogue 所需参数

handleCatalogue里 又调用了 setMergedPages
setMergedPages里又调用了 onCatalogueChange
his.options.onCatalogueChange(pages);
我理解就 形成了 监听

```
