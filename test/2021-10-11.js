//test.call(foo)

// var foo = {
//     name: 'fefifei',
//     test: function(){
//         console.log(this.name)
//     }
// }

// foo.test()
// var foo = {
//     name: 'feifei'
// }

// function test(age,like) {
//     console.log(age)
//     console.log(like)
//     console.log(this.name)
// }


// Function.prototype.call2 = function(context, ...args) {
//     context = context || window
//     context.test = this
//     let result =  context.test(...args)
//     delete context.test
//     return result
// }
// Function.prototype.apply2 = function(context, args){
//     context = context || window
//     context.test = this
//     let result =  context.test(...args)
//     delete context.test
//     return result
// }


// //test.call2(foo,18,'apple')
// test.apply2(foo,[18,'apple'])

// const type = Function.prototype.call.bind(Object.prototype.toString)
// console.log(type({}))



// function type2(v){
//     let a = Object.prototype.toString.call(v).slice(8, -1)
//     return a
// } 

// console.log(type2({}))

// function throttle(func, wait){
//     var timer
//     return function(...args){
//         if(!timer){
//             timer = setTimeout(()=>{
//                 timer = null
//                 func.apply(this, args)
//             }, wait)
//         }
//     }
// }

//let arrTest = [1,2,[3,[4,5]]]

// let arr = arrTest.flat(Infinity)

// console.log(arr)

// function flat2(arr){
//     let result
//     result = arr.reduce((acc, cur)=>{
//         if(!Array.isArray(cur)){
//             result = [...acc, cur]
//         }else{
//             result = [...acc, ...flat2(cur)]
//         }
//         return result
//     },[])
//     return result
// }

// console.log(flat2(arrTest))

// class EventBus {
//     constructor() {
//         this.eventContainer = this.eventContainer || new Map()
//     }
//     on(type, callback) {
//         if(!this.eventContainer.has(type)){
//             this.eventContainer.set(type, callback)
//         }
//     }
//     off(type){
//         if(this.eventContainer.has(type)){
//             this.eventContainer.delete(type)
//         }
//     }
//     emit(type, ...args){
//         let fn = this.eventContainer.get(type)
//         fn.apply(this, args)
//     }
// }

// let ev = new EventBus()
// function test(name){
//     console.log(name)
// }
// ev.on('myEvent', test)
// ev.emit('myEvent', 'feifei')

// class EventBus2 {
//     constructor(){
//         this.eventContainer = this.eventContainer || new Map()
//     }
//     on(type, callback){
//         let handle = this.eventContainer.get(type)
//         if(!this.eventContainer.has(type)){
//             this.eventContainer.set(type, [callback])
//         }else{
//             handle.push(callback)
//             handle = [...new Set(handle)]
//             this.eventContainer.set(type, handle)
//         }

//     }
//     emit(type, ...args){
//         let handle = this.eventContainer.get(type)
//         for(let i = 0; i< handle.length; i++){
//             let fn = handle[i]
//             fn.apply(this, args)
//         }
//     }
//     off(type, test){
//         if(this.eventContainer.has(type)){
//             if(test){
//                 let handle = this.eventContainer.get(type)
//                 console.log(handle)
//                 handle.splice(handle.findIndex((item) => item == test ),1)
//             }
//             // else{
//             //     this.eventContainer.delete(type)
//             // }      
//         }
//     }
// }

// let ev = new EventBus2()
// function test(name){
//     console.log(name)
// }
// function test2(name){
//     console.log(name, 2)
// }
// ev.on('myEvent', test)
// ev.on('myEvent', test)
// ev.on('myEvent', test2)

// ev.off('myEvent', test)
// ev.emit('myEvent', 'feifei')

//const data = [1, 2, 3, 0, 0, 0, 5, 2, 0, 1, 0, 0, 2];
//返回结果：[1,2,3,5,2,0,1,0,0,2]

// function test(arr){
//     let result = []
//     let flag = 0
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] !== 0){
//             if(flag >= 3) {
//                 flag = 0
//                 result.push(arr[i])
//             }else if(flag > 0){
//                 let smarr = new Array(flag).fill(0)
//                 console.log(smarr, result)
//                 result = result.concat(smarr)
//                 result.push(arr[i])
//                 console.log(result)
//                 flag = 0
//             }else if(flag === 0){
//                 result.push(arr[i])
//             }
            
//         }else{
//             flag ++
//         }
//     }
// //     console.log(result)
// //     return result
// // }

// // test(data)

// console.log('1');
// async function async1() {
//     console.log('2');
//     await async2();
//     console.log('3');
// }
// async function async2() {
//     console.log('4');
// }

// process.nextTick(function() {
//     console.log('5');
// })

// setTimeout(function() {
//     console.log('6');
//     process.nextTick(function() {
//         console.log('7');
//     })
//     new Promise(function(resolve) {
//         console.log('8');
//         resolve();
//     }).then(function() {
//         console.log('9')
//     })
// })

// async1();

// new Promise(function(resolve) {
//     console.log('10');
//     resolve();
// }).then(function() {
//     console.log('11');
// });
// console.log('12');

