var _a;
var isDone = false;
var count = 10;
var str = 'feifei';
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "feifei",
    _a);
console.log(obj[sym]);
var list = [1, 2, 3];
var list2 = [1, 2, 3]; // 泛型语法
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warn"] = 1] = "Warn";
    LogLevel[LogLevel["Info"] = 2] = "Info";
})(LogLevel || (LogLevel = {}));
console.log(LogLevel.Error);
console.log(LogLevel[0]);
console.log(0 /* Error */);
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
function warnUser() {
    console.log('hello feifei');
}
var x;
x = ['hello', 970202];
function identity(arg) {
    return arg;
}
function identity1(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function log1(arg) {
    console.log(arg.length);
    return arg;
}
function log2(arg) {
    console.log(arg.length);
    return arg;
}
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
