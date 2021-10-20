let a = {
    x: 1,
    y: [1,2,3],
    z: { 
        m: 1,
        n: {k: 2}
    }
}

let b = {
    x: 1,
    y: [1,2,3],
    z: { 
        m: 1,
        n: {k: 2}
    }
}

function objSame(obj1, obj2){
    let res1 = JSON.stringify(obj1)
    let res2 = JSON.stringify(obj2)
    return res1 == res2
}

function objSame2(obj1, obj2){
    // 仅适用于一层
    let res1 = Object.entries(obj1)
}

function objSame3(obj1, obj2) {
    let arr1 = Object.keys(obj1)
    let arr2 = Object.keys(obj2)
    console.log(arr1,arr2)
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i = 0; i< arr1.length; i++){
        let res1 = obj1[arr1[i]]
        let res2 = obj2[arr1[i]]
        if(typeof res1 !== typeof res2){
            return false
        }else if(typeof res1 == 'object'){
            if(res1 instanceof Object && res2 instanceof Object){
                objSame3(res1,res2)
            }
        }else if(typeof res1 == 'string'){
            
        }
    }
}

objSame3(a,b)

//objSame2(a,b)

//console.log(objSame(a, b))