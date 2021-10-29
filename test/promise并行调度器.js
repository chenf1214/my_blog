//  class Scheduler {
//     constructor(max){
//         // 最大并行promise
//         this.maxPromise = max
//         // 当前
//         this.count = 0
//         // 维护一个任务队列
//         this.taskList = []
//     }
//     add(fn){
//         let task = this.creatFNwithPromise(fn)
//         if(this.count < this.maxPromise){
//             this.count ++
//             task()
//         }else{
//             this.taskList.push(task)
//         }
//     }
//     // 需要一个promise 包裹这个方法，要不然没法执行问玩执行别的
//     creatFNwithPromise(fn){
//         return ()=> {
//             fn().then(()=> {
//                 this.count --
//                 if(this.taskList.length > 0){
//                     let task = this.taskList.shift()
//                     task()
//                 }
//             })
//         }
//     }
    
//  }

 class Scheduler {
     constructor(max){
        this.maxTask = max
        this.count = 0
        this.taskList = []
     }
     add(fn){
         let task = this.creatTask(fn)
        if(this.count < this.maxTask){
            this.count ++
            task()
        }else{
            this.taskList.push(task)
        }
     }
     creatTask(fn){
        return ()=> {
            fn().then(()=>{
                this.count --
                if(this.taskList.length > 0) {
                    let task = this.taskList.shift()
                    task()
                }
            })
        }
     }
 }

const timeout = function(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, time);
    })
}

const scheduler = new Scheduler(2)

const addTask = function(time, data){
    // let fn = function() {
    //     timeout(time).then(() => {
    //         console.log(data)
    //     })
    // }
    // scheduler.add(fn)

    // scheduler.add(()=> {
    //     timeout(time).then(() => {
    //         console.log(data)
    //     })
    // })

    scheduler.add(()=> timeout(time).then(()=> console.log(data)))
}

addTask(1000,"1");
addTask(500,"2");
addTask(300,"3");
addTask(400,"4");

let b = [4,5,6]

