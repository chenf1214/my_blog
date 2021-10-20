// deepClone 函数测试效果
const objA = {
  name: 'jack',
  objTest: {a:1,b:2},
  arrayTest: [1,2,3],
  birthday: new Date(),
  pattern: /jack/g,
//   body: document.body,
    others: [123,'coding', new Date(), /abc/gim,]
};

console.time()
const objB = deepClone(objA);
console.timeEnd()

console.log(objA === objB); // 打印 false
console.log(objA, objB); // 对象内容一样

// 编写一个深度克隆函数，满足以下需求（此题考察面较广，注意细节）
// function deepClone(obj) {
//     if(typeof obj === 'object'){
//         let result = Array.isArray(obj) ? [] : {}
//         for(let key in obj){
//             if(obj.hasOwnProperty(key)){
//                 result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
//             }
//         }
//         return result
//     }else{
//         return obj
//     }
// }

function deepClone(obj) {
    if(typeof obj === 'object'){
        let result = Array.isArray(obj) ? [] : {}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] instanceof Date){
                    result[key] = new Date(obj[key])
                }else if(obj[key] instanceof RegExp){
                    result[key] = new RegExp(obj[key])
                }
                // else if(obj[key] instanceof HTMLElement){
                //     result[key] = obj[key].cloneNode(true)
                // }
                else{
                    result[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
                }           
            }
        }
        return result
    }else{
        return obj
    }
    
}