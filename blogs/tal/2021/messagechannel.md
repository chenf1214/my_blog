---
title: MessageChannel
date: 2021-4-19
tags:
  - tag3
categories:
  - tal
---

## MessageChannel

Channel Messaging API 的 MessageChannel 接口允许我们创建一个新的消息通道，并通过他的两个 MessagePort 属性发送数据

```js
MessageChannel.port1 只读
返回channel的port1。

MessageChannel.port2 只读
返回channel的port2。
```

建立链接

1. ？？生成 传递 通道的时机？

```js
channel = new MessageChannel();
port1 = channel.port1;
port1.onmessage = onMessage;
page2.contentWindow.postMessage(
  {
    pageTo: page,
  },
  "*",
  [channel.port2]
);
```

2. page2 传递给 page3 ， 内容云传递给交互游戏？

```js
window.addEventListener("message", onMessage);
function onMessage(e) {
  port2 = e.ports;
}
page3.contentWindow.postMessage("", "*", port2);
```

3. 建立链接？

```js
window.addEventListener('message', function (event) {
        port2 = event.ports[0];
        port2.onmessage = onMessage;
    }
```

4. port2 给 port1 发消息 page3 给 page1 交互游戏给 mcc

```js
// 发送
port2.postMessage({
  count: count,
  event_content: param,
});

// 接受
function onMessage(e) {
  console.log(e.data, "form 通道");
}
```

4. myPort.onmessageerror = (event) => {
        console.error(event.data);
    };

- 1 messagchannel
  <img :src="$withBase('/801621514853_.pic.jpg')" alt="foo">

- 2 postmessage
  <img :src="$withBase('/811621574520_.pic.jpg')" alt="foo">

- 3 port2
  <img :src="$withBase('/1351623127190_.pic.jpg')" alt="foo">
