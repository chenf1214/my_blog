let p1 = new Promise((resolve, reject) => {
    resolve('成功')
    //reject('失败')
})
console.log('p1', p1)

let p2 = new Promise((resolve, reject) => {
    reject('失败')
    //resolve('成功')
}).catch(()=>{})
console.log('p2', p2)

// let p3 = new Promise((resolve, reject) => {
//     throw('报错')
// })
// console.log('p3', p3)

class promise {
    constructor(){

    }
}

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
