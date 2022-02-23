function isPrime(arr){
    var result = []
    
    for(let i=0; i<arr.length; i++){
        var prime = true
        if (arr[i] === 1)
            prime = false
            
    for(k=2; k<arr[i]; k++){
        if(arr[i] % k === 0)
        prime = false
    }
        if(prime)
        result.push(arr[i])
    }
    return result
}
console.log(isPrime([1,2,3,4,5,6,7,8,9,11,13]))


// Anonymous function 
var z = function primeNos(arr){

    var res = [];
    
    for(let i=0; i<arr.length; i++){
        var prime = true

        if(arr[i] === 1)
        prime = false

        for(let j=2; j<arr[i]; j++){
            if(arr[i]% j === 0){
                prime = false
            }
        }
        if(prime)
        res.push(arr[i]);
    }
    return res;

}
console.log(z([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]));

// By arrow functions
var res = (arr) => {

    var result = []
    for(i=0; i<arr.length; i++){
        var prime = true
        if(arr[i] == 1){
            prime = false
        }
        for(k=2; k<arr[i]; k++){
            if(arr[i]% k === 0){
                prime = false
        }
    }
        if (prime)
        result.push(arr[i])
    }
    return result;
}
console.log(res([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
