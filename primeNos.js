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
