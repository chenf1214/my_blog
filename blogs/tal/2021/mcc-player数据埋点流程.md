---
title: 数据埋点 上报 流程
date: 2021-4-23
tags:
 - tag3
categories:
 -  tal
---

## mccplayer 埋点流程 或 运行时序

<img :src="$withBase('/60261619613074_.pic_hd.jpg')">

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

6步骤 
动态创建3个标签，动态创建3个js文件，
暂时理解为1234
1.反转号？
2.
3.

同时 or 分开 
串行

js 找不到不会走之后的东西
会不会上报？ 是不是loadError 答案：是的

1.runTime.js 
2.?
3.?

是否很大？ 答案：2个几百k 有一个1.4M

算是课件基础文件么，一开始会在下载来？
算是基础包

xx放在一个基础包

4之后？ 
视频是js文件么？
题目的json文件，是属于题目么，题库导入？
加载题目用到的所有json文件，在基础包里？
公共资源，试题单独资源？

提前现在是什么时候下在？端上沟通？
是否都会有xx？

5？6？一样？
有无视频区别？开始加载？加载完成？

所以4 或者 6 不会有5？
答案：没有视频4 + 6

6试题加载完成。。。

6步骤之后？
答案：他们内部的一个事件初始化（事件maybe很多），可能会读了第一页，

4 5 之间有问题时，隐藏页的时候？读课件内容，导致错误？

第一页无视频，就不会初始话视频事件

全部结束windowload事件

接收到windowload然后 mcc发翻页message（且已知提前发翻页无用）
他们开始翻页，会有ready start：true？ 
答案：无操作，立马返回 ready （仅仅接发消息）

不同页情况如何？中途退出从进？是否有些其他的初始化？ 
答案：还是ready 还是没太多操作

给我们发消息的时机？
答案：先翻页到20，之后初始化，然后发ready
其实每一页都是初始化后发翻页成功，（正常情况下）

2是否是runtime？
答案： 保证不了？
也不是保证不了，只是2不一定在2

3个资源包是并行的，其他是串行的

发送了翻页你就收到了翻页，看ready时间差？

report-log？courseware？？？loadtimes 很长30s？

webp？解析限制？ios14.3？方案：换格式？

会议纪要
日志上报

ios 14部分解决webp格式

拦截webp请求头

安卓studiod可以测性能
