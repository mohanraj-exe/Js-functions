//c.sumOfAll
function sumOfAll(arr){
    
    var sum = 0
    var result = []
    for (let i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumOfAll([2,3,4,5])) // 14
