// conventional function method 
function rotateArr(arr,k){

    for(i=0; i<k; i++){
        arr.splice(0,0,arr[arr.length-1])
        arr.pop(arr.length)
    }
    return arr
}
console.log(rotateArr([1,2,3],2));

// anonymous function
var z = function (arr,k){

    var res = []
    for(i=0;i<k;i++){
        arr.splice(0,0,arr[arr.length-1])
        arr.pop(arr[arr.length])
        res.push(arr[i])
    }
    return arr
}
console.log(z([1,2,3],2))

// arrow functions
var z = (arr,k) => {

    var res = []
    for(i=0;i<k;i++){
        arr.splice(0,0,arr[arr.length-1])
        arr.pop(arr[arr.length])
        res.push(arr[i])
    }
    return arr
}
console.log(z([1,2,3],2))
