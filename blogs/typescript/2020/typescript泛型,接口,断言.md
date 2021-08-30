---
title: typescript 泛型，接口，断言
date: 2021-4-19
tags:
 - tag3
categories:
 -  typescript
---

## ts 泛型

软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。

在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。 这样用户就可以以自己的数据类型来使用组件。

创建一个identity函数，返回任何他传入的值

```ts
//不用泛型的
function identity(arg: number): number {
    return arg
}

function identity1(arg: any): any {
    return arg
}
// 以上均不准确，我们需要一种方法让返回值和传入的类型相同，这里，我们使用了 类型变量 它是一种特殊的变量，只用于表示类型而不是值
function identity2<T>(arg: T): T {
    return arg
}
// 使用
// 你可以
let output = identity<string>('myString')
// 但是 其实 ts类型推论 会帮我们确定T的类型
let output = identity('myString')
// 其他例子
function log1<T>(arg: T[]): T[]{
    console.log(arg.length)
    return arg
}

function log2<T>(arg: Array<T>): Array<T>{
    console.log(arg.length)
    return arg
}
```

## ts 接口

【ts文档】TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约

```ts
interface Person {
  //readonly x: number;
  age?: number; //可选参数
  [propName: string]: any;
  say(): string
}

interface Teacher extends Person {
  teacher(): string
}
```

## ts 断言

有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。它没有运行时的影响，只是在编译阶段起作用。
类型断言有两种形式：

```ts
let someValue: any = 'i love you'
let strLen: number = (<string>someValue).length

let strLen2: number = (someValue as string).length

```

<img :src="$withBase('/411619524919_.pic.jpg')">

<img :src="$withBase('/421619525577_.pic.jpg')">



