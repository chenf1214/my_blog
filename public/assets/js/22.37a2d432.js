(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{522:function(v,_,e){"use strict";e.r(_);var a=e(6),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h2",{attrs:{id:"工作计划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作计划"}},[v._v("#")]),v._v(" 工作计划")]),v._v(" "),e("ol",[e("li",[v._v("0520埋点的持续跟踪")]),v._v(" "),e("li",[v._v("messagChannel 调研， 具体是，先出一个demo 来实现 页面 和 iframe 里的 iframe 直接通信，\n最好能测试下大数据，且高频率下的情况，（以拖拽传递实时坐标为例）")]),v._v(" "),e("li",[v._v("尽可能整理下内容云等给我们的消息且没有用的，去掉冗余数据？为以后有可能自己上报消息的一个伏笔？")])]),v._v(" "),e("h2",{attrs:{id:"_0518-日程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0518-日程"}},[v._v("#")]),v._v(" 0518 日程")]),v._v(" "),e("p",[v._v("1.沟通了游戏帧率在 delay 时长过长时的一些不确定性\n2.鲁班建课，游戏帧率还是希望本地能测，（目前还是仅仅shou课端可测）\n3.鲁班建课，二个问题，1，课件在授课端交互游戏加载不出来，本地mcc可以播放。2，希望3端在有错时均白屏显示，目前pc还是现实错误信息（初步认为是应该是和移动端本地server有关系）")]),v._v(" "),e("p",[v._v("4.C:\\Users\\chenf\\AppData\\Local\\owcrclient\\wcropenclassroom\\download\\newxesteacher-0\\courseware\\ed4e356c08b54f039b0bd3f549cd88da")]),v._v(" "),e("p",[v._v("http://localhost:9998/devtools/inspector.html?ws=localhost:9998/devtools/page/A4AA96D0EEB6858AF9C272E96CC4DB4B")]),v._v(" "),e("p",[v._v("pc端替换dist的方法cp -R dist/* ~/Library/Application\\ Support/owcrclient/wcropenclassroom/localpages/studentweb")]),v._v(" "),e("h2",{attrs:{id:"双月okr-2021-5月-6月"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双月okr-2021-5月-6月"}},[v._v("#")]),v._v(" 双月OKR（2021,5月-6月）")]),v._v(" "),e("p",[v._v("O2 KR1：以现有接入交互游戏的方式，增加对交互游戏的控制能力，包括从头玩 接着玩 预加载等\ufeff@陈飞\ufeff\n去对标")]),v._v(" "),e("h2",{attrs:{id:"双月okr-2021-5月-6月-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双月okr-2021-5月-6月-2"}},[v._v("#")]),v._v(" 双月OKR（2021,5月-6月）")]),v._v(" "),e("p",[v._v("O2 KR2：课件播放器直接接入交互游戏的可行性以及技术方案，完成demo的开发\ufeff@陈飞")]),v._v(" "),e("p",[v._v("0521会议纪要")]),v._v(" "),e("p",[v._v("继续messageChannel 调研\n2个方向：\n1，port是否会丢失，且每次回收是否需要回收资源等等\n2.用更加仿真的例子，例如：切换下一页交互游戏，活交互游戏二次加载。等等")]),v._v(" "),e("p",[v._v("然后是0602？还是0610的需求\n具体就是交互游增加 uuid确保本次游戏唯一性")]),v._v(" "),e("p",[v._v("0525日计划")]),v._v(" "),e("ol",[e("li",[v._v("messageChannel 完善下传port2的方法，失败？确定一下port1.close是否可以提升性能")]),v._v(" "),e("li",[v._v("今日计划早睡11.30 务必睡觉")]),v._v(" "),e("li",[v._v("取消今晚回家的手机时间，改为cocos半小时以上网课")]),v._v(" "),e("li",[v._v("洗衣服")])]),v._v(" "),e("p",[v._v("0525结论\nmessageChannel的port2一旦发送就失去了对其的控制权\n也就是page3在reload的时候需要重新在page1生成新的port1和port2")]),v._v(" "),e("p",[v._v("几个问题：")]),v._v(" "),e("ol",[e("li",[v._v("当视频播放完成且在这页的视频状态 pause?")]),v._v(" "),e("li",[v._v("loading 是看intsrc么")]),v._v(" "),e("li",[v._v("error 不清楚怎么模仿")]),v._v(" "),e("li",[v._v("怎么判断playing")])]),v._v(" "),e("p",[v._v("时长 cwready 离线or线上 index 课件")]),v._v(" "),e("h3",{attrs:{id:"_7-8月的计划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-8月的计划"}},[v._v("#")]),v._v(" 7-8月的计划")]),v._v(" "),e("p",[v._v("0719")]),v._v(" "),e("ol",[e("li",[v._v("分析了 课件加载中的日志")])]),v._v(" "),e("ul",[e("li",[v._v("1.1 结论：loaded1到load6耗时 5s ，之后获取目录 4秒仍未返回，学生刷新")])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("回家剪指甲")]),v._v(" "),e("li",[v._v("吃药，喝牛奶，11.20睡")]),v._v(" "),e("li",[v._v("补一下 跟着玩，重新玩，授权id的相关逻辑")]),v._v(" "),e("li",[v._v("了解到pc端日志在1.5.15缺失 1.5.16后修复")])]),v._v(" "),e("h4",{attrs:{id:"周末计划"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#周末计划"}},[v._v("#")]),v._v(" 周末计划：")]),v._v(" "),e("ol",[e("li",[v._v("剪头")]),v._v(" "),e("li",[v._v("回收手机")]),v._v(" "),e("li",[v._v("和bro 吃饭")]),v._v(" "),e("li",[v._v("买衣服")]),v._v(" "),e("li")]),v._v(" "),e("p",[v._v("0727 周二")]),v._v(" "),e("ol",[e("li",[v._v("和学生端联调")]),v._v(" "),e("li",[v._v("最近不怎么学习了，不行了，点认真和专注起来了，要有危机意识了，不能再一天傻嘿嘿了")]),v._v(" "),e("li",[v._v("回去不能玩手机了，学习和早睡都重要")]),v._v(" "),e("li",[v._v("现在人心惶惶，我自己也很烦，静一下，静心面对接下来的事情，无论好坏，若是改变不了就试着及时止损")])]),v._v(" "),e("p",[v._v("技术方面，如何判断对象中的循环引用没有做好。")]),v._v(" "),e("p",[v._v("https://kjdsfz-cdn.jiaoyanyun.com/webkjdsfiles/e0becd16642d4b72ad182f5bb6b47451/index.html?id=f9cd0296da9e42d8a05ea54a949eca5e&line=off&pageCount=4&env=30&omoType=online")]),v._v(" "),e("p",[v._v("危 危险 岌岌可危")]),v._v(" "),e("p",[v._v("不接受来自自己的消息 uuid 验证ok\n数据对齐 验证ok")]),v._v(" "),e("p",[v._v("https://github.com/netless-io/flat 一个开源的 在线课堂的东东")])])}),[],!1,null,null,null);_.default=t.exports}}]);