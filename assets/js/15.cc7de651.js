(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{518:function(t,a,v){"use strict";v.r(a);var _=v(6),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"tcp-transmission-control-protocol-和-udp-user-datagram-protocol-区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-transmission-control-protocol-和-udp-user-datagram-protocol-区别"}},[t._v("#")]),t._v(" tcp Transmission control protocol 和 udp User datagram protocol  区别")]),t._v(" "),v("p",[t._v("tcp 是面向链接的，可靠的，基于字节流的传输协议\nudp 面向无连接的传输层协议")]),t._v(" "),v("h2",{attrs:{id:"tcp-滑动窗口"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-滑动窗口"}},[t._v("#")]),t._v(" tcp 滑动窗口")]),t._v(" "),v("p",[t._v("tcp 的滑动窗口分为2种， 发送窗口和接收窗口")]),t._v(" "),v("p",[t._v("发送窗口")]),t._v(" "),v("p",[t._v("先说一下发送端的窗口结构")]),t._v(" "),v("ul",[v("li",[t._v("1.已发送，已确认")]),t._v(" "),v("li",[t._v("2.已发送，未确认")]),t._v(" "),v("li",[t._v("3.未发，但是能发")]),t._v(" "),v("li",[t._v("4.未发，但是也不能发")])]),t._v(" "),v("p",[t._v("2和3是发送窗口，3是其中的可用窗口")]),t._v(" "),v("p",[t._v("流量控制\n发送 接收 200都\n先发100\n收到后 由于负载处理不了，处理40， 60方缓冲区\n告诉发送，我这边之后只能处理140了\n发送端调整 窗口为140，并且snd.una向后移40")]),t._v(" "),v("h2",{attrs:{id:"tcp-拥塞控制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tcp-拥塞控制"}},[t._v("#")]),t._v(" tcp 拥塞控制")]),t._v(" "),v("p",[t._v("拥塞窗口\n慢启动阈值")]),t._v(" "),v("p",[t._v("接收窗口是接收端给的限制\n拥塞窗口是给发送端的限制")]),t._v(" "),v("p",[t._v("限制谁\n限制 发送窗口 大小")]),t._v(" "),v("p",[t._v("发送窗口实际大小 min（rwnd，cwnd）")]),t._v(" "),v("p",[t._v("拥塞控制涉及几个算法")]),t._v(" "),v("ul",[v("li",[t._v("慢启动")]),t._v(" "),v("li",[t._v("拥塞避免")]),t._v(" "),v("li",[t._v("快速重传和快速恢复")])]),t._v(" "),v("h2",{attrs:{id:"慢启动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#慢启动"}},[t._v("#")]),t._v(" 慢启动")]),t._v(" "),v("p",[t._v("慢慢传，尽量保守点")]),t._v(" "),v("p",[t._v("首先三次握手，宣告自己的接收窗口的大小")]),t._v(" "),v("p",[t._v("双方初始化拥塞窗口大小")]),t._v(" "),v("p",[t._v("发送端 每收到一个ack，拥塞窗口 +1\n也就是每经过一个rtt， cwnd翻倍")]),t._v(" "),v("p",[t._v("假设第一轮10个报文，传完了且收到了ack后 cwnd变为20\n再一轮 40\n80")]),t._v(" "),v("p",[t._v("别急，肯定不能一直长大，会有个阈值，之后就是 拥塞避免出手了")]),t._v(" "),v("h3",{attrs:{id:"拥塞避免"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[t._v("#")]),t._v(" 拥塞避免")]),t._v(" "),v("p",[t._v("不长这么快了，让每一轮真的只 +1\n也就是收到个ack 增加 1/cwnd\n当然其实， 拥塞避免和慢启动其实是一起作用的")]),t._v(" "),v("h2",{attrs:{id:"快速重传和快速恢复"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速重传和快速恢复"}},[t._v("#")]),t._v(" 快速重传和快速恢复")]),t._v(" "),v("h2",{attrs:{id:"http-1-1如何解决队头阻塞问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1如何解决队头阻塞问题"}},[t._v("#")]),t._v(" http 1.1如何解决队头阻塞问题")]),t._v(" "),v("p",[t._v("http 传输是基于 请求-应答 模式的，是串行的\n也就是说一个请求的应答慢了，后面的都堵着")]),t._v(" "),v("h2",{attrs:{id:"并发链接"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#并发链接"}},[t._v("#")]),t._v(" 并发链接")]),t._v(" "),v("p",[t._v("一个域名允许分配多个链接，相当于多了任务多列\nrfc官方的规定其实是最多并发 2 个，但是像chrom这种浏览器实现了 6 个")]),t._v(" "),v("h2",{attrs:{id:"域名分片"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#域名分片"}},[t._v("#")]),t._v(" 域名分片")]),t._v(" "),v("p",[t._v("多分几个2级域名，那就不止6个了")]),t._v(" "),v("h2",{attrs:{id:"http2-0有哪些改动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http2-0有哪些改动"}},[t._v("#")]),t._v(" http2.0有哪些改动")]),t._v(" "),v("p",[t._v("头部压缩")]),t._v(" "),v("p",[t._v("多路复用\nhttp队头阻塞\n二进制分帧")])])}),[],!1,null,null,null);a.default=r.exports}}]);