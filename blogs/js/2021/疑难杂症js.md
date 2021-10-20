### 1. 类数组 ArrayLike
```js
cosnt obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push 
}
obj.push(1)
obj.push(2)
console.log(obj); // [empty × 2, 1, 2, splice: ƒ, push: ƒ]
console.log(Array.from(obj)); [undefined, undefined, 1, 2]
```

#### so why？
1.  首先 obj 中定义了两个 key， push 和 splice， 分别对应数组原型中的 push 和 splice 
2.  push 方法：
        这个方法会根据 length 属性来决定从哪里来插入给定的值，且不存在就会创建length
3.  所以本题中 length 为 2，也就是会从 数组索引 为2的位置开始插入 或者你理解为替换
    所以 push(1) 会替换下标为 2 的一项，push(2) 会替换掉索引下标为 3 的一项。
    此时 key 为 2 的属性值为 1 ，key 为 3 的属性值为 2 
    因为只是定义了 2 和 3 两项，没有定义 0 和 1 两项，所以前面会是 empty。
    [empty × 2, 1, 2, splice: ƒ, push: ƒ]
4.  Array.from(obj）类数组转化为数组   
    [undefined, undefined, 1, 2]

### 2. 深浅拷贝

```js
// 这是一道ali的面试题
// 编写一个深度克隆函数，满足以下需求（此题考察面较广，注意细节）
function deepClone(obj) {}

// deepClone 函数测试效果
const objA = {
  name: 'jack',
  birthday: new Date(),
  pattern: /jack/g,
  body: document.body,
  others: [123,'coding', new Date(), /abc/gim,]
};

const objB = deepClone(objA);
console.log(objA === objB); // 打印 false
console.log(objA, objB); // 对象内容一样
```

### 浅拷贝
#### concat 方法用于合并2个或者多个数组，此方法不会改变现有数组，而是会返回一个新数组

```js
var arr = [{old: 'old'}, ['old']];

var new_arr = arr.concat();

arr[0].old = 'new';
arr[1][0] = 'new';

console.log(arr) // [{old: 'new'}, ['new']]
console.log(new_arr) // [{old: 'new'}, ['new']]
```


