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
