---
title: typescript 类
date: 2021-4-20
tags:
 - tag3
categories:
 -  typescript
---

## ts 类

```ts
class Animal {
  // 静态属性
  static cname: string = "feifei";
  // 成员属性
  greeting: string;
  // 构造函数 - 执行初始化操作
  constructor(message: string){
    this.greeting = message
  }
  // 静态方法
  static getMyName(){
    return 'my name is feifei'
  }
  // 成员方法
  greet(){
    return "hello" + this.greeting
  }
}

let gretter = new Animal('word')
// es5
var Animal = /** @class */ (function () {
    // 构造函数 - 执行初始化操作
    function Animal(message) {
        this.greeting = message;
    }
    // 静态方法
    Animal.getMyName = function () {
        return 'my name is feifei';
    };
    // 成员方法
    Animal.prototype.greet = function () {
        return "hello" + this.greeting;
    };
    // 静态属性
    Animal.cname = "feifei";
    return Animal;
}());
var gretter = new Animal('word');
```


