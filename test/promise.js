// let p1 = new Promise((resolve, reject) => {
//     resolve('成功')
//     //reject('失败')
// })
// console.log('p1', p1)

// let p2 = new Promise((resolve, reject) => {
//     reject('失败')
//     //resolve('成功')
// }).catch(()=>{})
// console.log('p2', p2)

// let p3 = new Promise((resolve, reject) => {
//     throw('报错')
// })
// console.log('p3', p3)

// class promise {
//     constructor(){

//     }
// }

// 一个简单的 axios 封装
// public createHttp(): void {
//     this.Http = axios.create({
//       baseURL: this.urlPrefix,
//       timeout: this.COURSE_REQUEST_MAX_TIME,
//     });
//     this.Http.interceptors.request.use(
//       (config: AxiosRequestConfig) => {
//         return config;
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//     this.Http.interceptors.response.use(
//       (response: AxiosResponse) => {
//         if (response.status === 200) {
//           return Promise.resolve(response.data);
//         } else {
//           return Promise.reject(response.data);
//         }
//       },
//       (err) => {
//         return Promise.reject();
//       }
//     );
//   }

let promise1 = Promise.resolve(3)
let promise2 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        resolve('foo')
    }, 100);
})
let promise3 = 66
let iterable = [promise2,promise1,promise3]
// let iterable2 = []
// //console.log(promise1)
// Promise.all([]).then((res)=>{
//     console.log(res)
// })

// function myPromiseAll(iterable) {
//     return new Promise((resolve,reject) => {
//         const promises = Array.from(iterable);
//         // 定义Promise对象resolve的数组
//         const result = [];
//         // 定义一个计数器用来判断是否所有的promise执行完毕
//         let count = 0;
//         // 并发执行每一个promise
//         for (let i = 0; i < promises.length; i++) {
//             Promise.resolve(promises[i]).then(res => {
//                 result[i] = res;
//                 count++;
//                 if (count === promises.length) {
//                     resolve(result);
//                 }
//             }).catch(err => reject(err))
//         }
//     })
// }

// myPromiseAll([]).then(res => {
//     console.log(res)
// })


// function promiseAll(iterable) {
//     let count = 0
//     let result = []
//     let len = iterable.length
//     if(iterable.length == 0) {
//         return Promise.resolve([])
//     }
//     return new Promise((resolve,reject)=> {
//         for(let i = 0; i< len; i ++){
//              Promise.resolve(iterable[i]).then(res => {
//                  count ++ 
//                  result.push(res)
//                 if(count == len) {
//                     resolve(result)
//                 }
//              }).catch(err => reject(err))
//         }
//     })
// }

// promiseAll([]).then(res => console.log(res))

// 总结： promise.all 肯定是 return 一个promise 
// 全部结束时停止，或者出错时停止
// 所以我们循环，让每个promise执行，这时用到 Promise.resoleve()这个方法，他接受一个promise并解析，返回的也是个promise可以.then

function promiseRace(iterable){
    // 要领：一个resolve就直接返回
    let len = iterable.length
    return new Promise((resolve,reject) => {
        for(let i = 0; i< len; i ++){
            Promise.resolve(iterable[i]).then(res => {
                resolve(res)
            }).catch(err => reject(err))
        }
    })
}

promiseRace([]).then(res => console.log(res))
Promise.race([]).then(res => console.log(res))



