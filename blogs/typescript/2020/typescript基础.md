---
title: typescript 基础
date: 2021-4-19
tags:
 - tag3
categories:
 -  typescript
---

## ts 基础语法
0. 准备工作
```ts
// mac 下全局安装ts
sudo npm install typescript -g
// 检查 版本
tsc --version
```

### 1.1 Boolean 类型
```ts
let isDone: boolean = false;
// es5 
var isDone = false;
```

### 1.2 Number 类型
```ts
let count: number = 1;
// es5 
var count = 1;
```

### 1.3 String 类型
```ts
let str: string = ‘feifei’;
// es5 
var str = ‘feifei’;
```

### 1.4 Symbol 类型
```ts
const sym = Symbol();
let obj = {
  [sym]: "feifei",
};

console.log(obj[sym]); // feifei 
```

### 1.5 Array 类型
```ts
let list: number[] = [1,2,3]
// es5 
var list = [1, 2, 3];

let list2: Array<number> = [1,2,3] // 泛型语法
// es5 
var list2 = [1, 2, 3]; // 泛型语法
```

### 1.6 Enum 类型

【ts文档】使用枚举我们可以定义一些带名字的常量，使用枚举可以清晰地表达意图或创建一组有区别的用例，ts支持数字的和基于字符串的枚举

```ts
// 数字枚举
enum LogLevel {
  Error = 0, // SDK错误日志
  Warn = 1, // SDK警告日志
  Info = 2, // SDK基础日志
}
// 以上等价于
enum LogLevel {
  Error, // SDK错误日志
  Warn, // SDK警告日志
  Info, // SDK基础日志
}
console.log(LogLevel.Error) // 0
console.log(LogLevel[0]) // Error

// 常量枚举
export enum ItsEnv {
  Prerelease = 'prerelease', // 仿真环境
  Production = 'production', // 生产环境
}
//es5
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Info"] = 2] = "Info";
})(LogLevel || (LogLevel = {}));

// 常量枚举
// 编译阶段会被删除，成员在使用的地方会被内联起来
const enum LogLevel2 {
    Error, // SDK错误日志
    Warn, // SDK警告日志
    Info, // SDK基础日志
}

console.log(LogLevel2.Error)
//es5
console.log(0 /* Error */);
```

### 1.7 Any 类型

sometime我们在某一阶段还不清楚变量的类型，或者说，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
// es5 
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

但是很明显，这太宽松了，使用any时我们无法使用ts提供的保护机制，为此ts3.0引入了 unknow

### 1.8 Unknow 类型

就像所有类型都可以赋值给 any，所有类型也都可以赋值给 unknown


```ts
let value: unknown;

value = true; // OK
value = 42; // OK
value = "Hello World"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = new TypeError(); // OK
value = Symbol("type"); // OK
```

unknown 类型只能被赋值给 any 类型和 unknown 类型本身
```ts
let value: unknown;

let value1: unknown = value; // OK
let value2: any = value; // OK
let value3: boolean = value; // Error
let value4: number = value; // Error
let value5: string = value; // Error
let value6: object = value; // Error
let value7: any[] = value; // Error
let value8: Function = value; // Error

```

将 value 变量类型设置为 unknown 后，这些操作都不再被认为是类型正确的。通过将 any 类型改变为 unknown 类型，我们已将允许所有更改的默认设置，更改为禁止任何更改。

```ts
let value: unknown;

value.foo.bar; // Error
value.trim(); // Error
value(); // Error
new value(); // Error
value[0][1]; // Error
```

### 1.9 Void 类型

某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：

```ts
function warnUser(): void {
    console.log('hello feifei')
}
//es5
function warnUser() {
    console.log('hello feifei');
}
// 是的声明一个void类型的变量没有什么大用出，因为你只能为它赋予undefined和null
let unusabled: void = undefined
```

### 1.10 Tuple 元组 类型

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。

```ts
let x: [string, number];
x = ['hello', 970202]
//es5
var x;
x = ['hello', 970202];
```

### 1.11 Null 和 Undefined 类型

TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大

```ts
let u: undefined = undefined;
let n: null = null;
```
### 1.12 Object 类型

### 1.13 never 类型




