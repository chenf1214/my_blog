let isDone: boolean = false;

let count: number = 10;

let str: string = 'feifei';

const sym = Symbol()
let obj = {
  [sym]: "feifei"
}
console.log(obj[sym])

let list: number[] = [1, 2, 3]

let list2: Array<number> = [1, 2, 3] // 泛型语法

enum LogLevel {
  Error, // SDK错误日志
  Warn, // SDK警告日志
  Info, // SDK基础日志
}

const enum LogLevel2 {
  Error, // SDK错误日志
  Warn, // SDK警告日志
  Info, // SDK基础日志
}
enum Role {
  Student = 'student',
  Teacher = 'teacher',
}

function lala (data: string){
  for(let key in Role){
    console.log(key)
    if(data == Role[key]){
      return true
    }
  }
  return false
}

console.log(lala('teacher'),888888)
console.log(lala('teacher3'),888888)
console.log(lala('student'),888888)


console.log(LogLevel.Error)
console.log(LogLevel[0])

console.log(LogLevel2.Error)

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean

function warnUser(): void {
  console.log('hello feifei')
}

let x: [string, number];

x = ['hello', 970202]

function identity(arg: number): number {
  return arg
}

function identity1(arg: any): any {
  return arg
}

function identity2<T>(arg: T): T {
  return arg
}

function log1<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

function log2<T>(arg: Array<T>): Array<T> {
  console.log(arg.length)
  return arg
}

interface Person {
  name: string;
  age?: number; //可选参数
  [propName: string]: any;
  say(): string
}

interface Teacher extends Person {
  teacher(): string
}

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

let someValue: any = 'i love you'
let strLen: number = (<string>someValue).length

let strLen2: number = (someValue as string).length

let test:number
test++
console.log(test)



