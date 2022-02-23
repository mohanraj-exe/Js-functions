//e. Return Median of two sorted arrays of same size

function median(arr1,arr2){
  arr3 = sort.arr1()
  arr4 = sort.arr2()
  var value1 = arr3[arr3.length-1]
  var value2 = arr4[0]
  var result = (value1 + value2)/2
  return result;
}
console.log(median([2,4,1,3],[5,6,8,7]))

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
