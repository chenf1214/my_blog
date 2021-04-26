---
title: tal 文档
date: 2018-12-15
tags:
 - tag3
categories:
 -  tal
---

# 课件技术方案

## H5 课件优势

1. 呈现内容更丰富
2. 更多的动作同步，现在可以同步动画、TAB 标签、脑图、部分内容滚动等
3. 首页加载成功后，单页加载更快，翻页不存在白屏现象

## H5 课件已知问题

1. 同步 iframe 的内容需要按内容进行开发，工作量与内容成正比
2. 公共资源包变得更大

## 课件端需要的接口

### 广播

#### sendRoomItsMessage

发送消息

```ts
sendRoomItsMessage:(data: unknown) => void
```

#### handleRoomItsMessage

接收消息

```ts
handleRoomItsMessage(data:unknown)=>void
```

### 存取数据

#### storeData

存数据

```ts
storeData: (
  key: string,
  data: unknown,
  callback: (success: boolean) => void
) => void;
```

#### getStoreDataByKey

取数据

```ts
getStoreDataByKey: (key: string, callback: (data: unknown) => void) => void;
```

#### getAllStoredData

取存储的所有数据，返回一个 object，key 为所有存储的 key，value 则对应

```ts
getAllStoredData: (
  callback: (data: { [key: string]: unknown }) => void
) => void;
```

## 课件关键操作时序图

```mermaid
sequenceDiagram
participant i as 自定义iframe
participant c as 课件/内容云
participant p as 播放器/MccPlayer
participant t as 授课/学生端
participant s as pomelo/server

rect rgb(255, 255, 255)
  Note right of c: 加载
  t->>+s: 获取断线重连消息
  s-->>-t: 发送相关状态
  t->>p: 初始化（课件ID，课件本地URL，课件远端URL）
  p->>+c: iframe加载课件
  c-->>-p: lodaded
end

rect rgb(255, 255, 255)
  Note right of c: 获取目录&资源
  p->>+c: 获取课件目录
  c-->>-p: 课件目录
  p->>+c: 获取课件内资源信息
  c-->>-p: 返回资源信息(h5可返回空)
  p->>+t: 检查所有资源本地是否存在
  t-->>-p: 资源本地是否存在
end

rect rgb(220, 220, 220)
  Note right of c: 授课端逻辑
  rect rgb(255, 255, 255)
    t->>+p: 加页
    p-->>t: 发送目录&当前页更改
    activate t
    t->>t: 处理UI展示
    deactivate t
    p-->>-t: 发送同步消息
    t-->>s: 发送同步消息
  end

  rect rgb(255, 255, 255)
    t->>+p: 翻页
    alt 翻到课件页
      p->>+c: 翻页
      c-->>-p: 页面更改
    else
      p->>p: 处理非课件页的翻页逻辑
    end
    p-->>t: 发送当前页更改
    activate t
    t->>t: 处理UI展示
    deactivate t
    p-->>-t: 发送同步消息
    t-->>s: 发送同步消息
  end

  rect rgb(255, 255, 255)
    t->>+p: 翻动画
    p->>c: 翻动画
    alt 当前可以翻动画
      c->>p: 发送同步消息
      p->>t: 发送同步消息
      t->>s: 发送同步消息
      c->>p: 存储状态
      p->>t: 存储状态
      t->>s: 存储状态
    else
      c->>p: 需要翻页
      p->>c: 翻页
      c-->>p: 翻页完成
      p->>t: 上报当前页变化
      p->>t: 发送同步消息
      t->>s: 发送同步消息
    end
  end

  rect rgb(255, 255, 255)
    c-->>p: 发送媒体点击行为（图文）
    p->>p: 判断类型，是否在本地等
    p->>t: 获取资源是否在本地
    t-->>p: 返回结果
    p-->>p: 获取m3u8地址
    p->>c: 获取音频位置
    c-->>p: 返回音频位置
    p->>p: 播放媒体
    p->>t: 发送同步消息
    t->>s: 发送同步消息
  end

  rect rgb(255, 255, 255)
    c->>c: 媒体或者动画等内部状态变更
    c->>p: 发送同步消息
    p->>t: 发送同步消息
    t->>s: 发送同步消息
    c->>p: 存储状态
    p->>t: 存储状态
    t->>s: 存储状态
  end

  rect rgb(255, 255, 255)
  loop 定期同步
    p->>t: 发送同步消息
    t->>s: 发送同步消息
  end
  end
end

rect rgb(220, 220, 220)
  Note right of c: 学生端逻辑

  rect rgb(255, 255, 255)
    s->>t: 接收同步消息
    t->>p: 接收同步消息
    p->>p: 恢复目录、当前页、媒体播放
    p->>+c: 翻页
    c-->>-p: 页面更改
    p->>t: 发送目录&页面更改
  end

  rect rgb(255, 255, 255)
    t-->>p: 需要恢复
    p->>t: 获取最后同步消息
    p-->>c: 需要恢复
    c->>p: 获取存储状态
    p->>t: 获取存储状态
    t->>s: 获取存储状态
    t-->>p: 返回最后同步消息
    p->>p: 恢复目录、当前页、媒体播放
    p-->>t: 发送目录&当前页更改
    s-->>t: 返回存储状态
    t-->>p: 返回存储状态
    p-->>c: 返回存储状态
    c->>c: 恢复当前页状态
  end
end

```

## 媒体播放流程图

```mermaid
graph TD
开始 --> 加载课件组件
--> 获取媒体是否在本地
--> 发生媒体点击行为
--> a{已有媒体播放}
a --> |存在| b[停止当前播放] --> c
a --> |不存在| c{本地资源是否存在}
c --> |存在| d[播放媒体]
c --> |不存在| g[再获取一次本地资源情况] --> i{本地是否存在}
i --> |存在| d
i --> |不存在| e{是否存在m3u8地址}
e --> |存在| f[获取线上m3u8地址] -->d
e --> |不存在| h[拼接mp4地址] --> d
--> 每3秒同步状态
--> 结束
```

## 确定的技术方案

1. 隐藏页逻辑：隐藏页要有（交互游戏挂在一个页上面，将页设置为隐藏），一期把所有隐藏页当作正常页处理，二期隐藏页在上下页中不展示
2. 媒体播放排他确定，媒体播放排他
3. 业务标签展示的问题，结论：拿不到不是相应业务的标签（不用关心这个问题）
4. 视频播放撑满，结论：撑满，H5 课件可手动切换
5. 音频动效问题（比如单词）结论：使用控制条展示还是外部展示，更改默认图标，通过外部的动效（可以不考虑四个角的问题）
6. 交互游戏（课件内部）可能存在学生来操作的情况，公共屏幕和私有屏幕的问题，一期，二期应该没有
7. 手机竖屏处理：只有横屏，pad 也只有横屏
8. 音量同步问题：各自调整，完全不用同步
9. 哪些操作同步：视频播放，暂停，seek
10. 视频控制条，老师端控制条使用 chrome 默认的
11. 学生端怎样展示视频控制条，结论：不用展示任何控制，包括音量
12. 暂时没有课件多开需求，多开由上层隔离环境即可
13. 目录和当前也同步、课件的同步、媒体的同步走同一个接口

## 参考资料

[课件内 iframe 同步规范](https://wiki.zhiyinlou.com/pages/viewpage.action?pageId=93693902)
