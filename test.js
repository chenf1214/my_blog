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
var Role;
(function (Role) {
    Role["Student"] = "student";
    Role["Teacher"] = "teacher";
})(Role || (Role = {}));
function lala(data) {
    for (var key in Role) {
        console.log(key);
        if (data == Role[key]) {
            return true;
        }
    }
    return false;
}
console.log(lala('teacher'), 888888);
console.log(lala('teacher3'), 888888);
console.log(lala('student'), 888888);
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
var someValue = 'i love you';
var strLen = someValue.length;
var strLen2 = someValue.length;
var test;
//test++;
console.log(test);
