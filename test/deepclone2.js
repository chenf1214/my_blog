// deepClone 函数测试效果
const objA = {
    name: 'jack',
    objTest: {a:1,b:2},
    arrayTest: [1,2,3],
    a: null,
    birthday: new Date(),
    pattern: /jack/g,  
    // body: document.body,
    // others: [123,'coding', new Date(), /abc/gim,]
  };
  
  console.time()
  const objB = deepClone(objA);
  console.timeEnd()
  
//   console.log(objA === objB); // 打印 false
   console.log( objB); // 对象内容一样

function deepClone(obj) {
    if(typeof obj == 'object' && obj !== null){
        let result = Array.isArray(obj) ? [] : {}
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key ]instanceof Date){
                    result[key] = new Date(obj[key])
                }else if(obj[key] instanceof RegExp){
                    result[key] = new RegExp(obj[key])
                }
                
                else{
                    result[key] = typeof obj[key] == 'object' ? deepClone(obj[key]) : obj[key]
                }
                
            }
        }
        return result
    }else {
        console.log(obj)
        return obj
    }  
}