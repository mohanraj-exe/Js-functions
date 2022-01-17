//d.Return all Panlidrome
function palindrome(arr){
    var result = []
    for (let i=0; i<arr.length; i++){
        var strReserve;
        strReserve = arr[i].toString().split('').reverse().join('')
        if(strReserve == arr[i]){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(palindrome([121,232,'eve','exe','dood','asdfgf'])) //[121,232,'eve','exe','dood']
