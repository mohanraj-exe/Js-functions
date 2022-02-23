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

// By Anonymous function
var iniz = function (arr){

    var sum = 0
    for(i=0; i<arr.length; i++){
        
        sum = sum + arr[i]
    }
    return sum
}
var res = iniz([1,2,3,4,5])
console.log(res);

//Arrow functions
var res = (arr) =>{

    var sum = 0;
    for(i in arr){
      sum += arr[i] 
    }
    return sum
}
console.log(res([1,2,3,4,5]))
