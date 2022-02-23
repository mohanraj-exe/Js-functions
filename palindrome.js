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

// Anonymous function
var result = function palindrome(arr){

    var res = []
    for(i=0; i<arr.length; i++){
        var str = arr[i].toString()
        var char = str.split("").reverse().join("");
        if(char == arr[i]){
            res.push(arr[i])
        }
    }
    return res
}
console.log(result([121,232,"eve","dood","lol","hello","geek","guvi"]))

// By arrow function
var res = (arr) => {

    var result = []
    
    for(i=0; i<arr.length; i++){
        var reversedStr = arr[i].toString().split("").reverse().join("");
        if(arr[i] == reversedStr){
            result.push(arr[i])
        }
    }
    return result
}
console.log(res([121,232, "eve", "dood", "lol","hello","guvi","geek"]))
