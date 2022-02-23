// Conventional function method
function  removeDuplicates(arr) {
    arr.sort();
    for(i=0;i<arr.length;i++) {
        if(i==0 && arr[i] == arr[i+1]) {
            arr.splice( i,i+1);
        }
        if(arr[i] === arr[i-1]) {
            arr.splice( i-1,1)
        }
    }
    return arr
}
 
console.log(removeDuplicates([1,1,3,4,5,6,6,2,1,3]));

// Anonymous function
var iniz = function(arr){

    arr.sort();
    for(i=0; i<arr.length; i++){
        if(i==0 && arr[i] == arr[i+1]){
            arr.splice(i,i+1)
        }
        if(arr[i] == arr[i-1]){
            arr.splice(i-1, 1)
        }
    }
    return arr
}
var res = iniz([1,2,3,4,5,1,4])
console.log(res)

// By arrow functions
var res = (arr) =>{

    arr.sort()
    console.log(arr)
    for(i=0; i<arr.length; i++){
        if(i==0 && arr[i] == arr[i+1]){
            arr.splice(i,i+1)
        }
        if(arr[i] == arr[i-1]){
            arr.splice(i-1,1)
        }
    }
    return arr
}
console.log(res([1,2,3,4,5,1,4]))
