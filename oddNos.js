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
