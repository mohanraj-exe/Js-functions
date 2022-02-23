//a.oddNos Example
function oddNos(arr){
    
    var result = []
    for (let i=0; i<arr.length; i++){
        if (arr[i] % 2!== 0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(oddNos([2,3,4,5])) //[3,5]

// Anonymous function
var oddNos = function (arr){
    var res = []
    for(let i=0; i<arr.length; i++){

        if(arr[i]%2 !==0){
            res.push(arr[i])
        }
    }
    return res;

}
console.log(oddNos([1,2,3,4,5,6]))

// By arrow functions
var func = (arr) => {

    var res = []
    for(i=0;i<arr.length; i++){
        if(arr[i]%2 !== 0){
            res.push(arr[i])
        }
    }
    return res
}
console.log(func([1,2,3,4,5,6]))
