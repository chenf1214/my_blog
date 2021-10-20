// const seq = [0, 8, 4, 12, 2, 10]

// function lis(nums) {
//     let dp = Array(nums.length).fill(1);
//     console.log(dp)
//     let result = 1

//     let len = nums.length
//     for(let i = len - 2; i >= 0; i--){
        
//         for(let j = i + 1; j < len; j ++){
//            console.log(i, j)
//            if(nums[i] < nums[j]){
//             dp[i] = Math.max(dp[i], dp[j] + 1)
//            }
           
//            console.log(dp)
//         }
//         result = Math.max(result, dp[i])
//     }
//     return result
// }
// console.log(lis(seq)) //得到的序列中的位置索引

var obj = {
    name: 'la',
    bar: function() {
      var x = (() => {
        console.log(this)
        return this
      });
      return x
    }
  };

  var obj = {
    name: 'la',
    bar: function() {
      var x = (() => {
        console.log(this)
        return this
      });
      return x

    //   return function(){
    //     console.log(this)
    //       return this
    //   }
    }
  };
  
  // 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
  // 将返回的函数的引用赋值给fn。
   var fn = obj.bar();
fn()
console.log(fn() == obj)
console.log(fn().name)