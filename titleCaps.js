//b.Convert all the strings to title caps in a string array
function titleCase(arr){
    var result = []
    for (let i=0; i<arr.length; i++){
        
        var arrResult = []
        var word = arr[i].split(' ')
        for (let j=0; j<word.length; j++){
            arrResult.push(word[j].charAt(0).toUpperCase()+ word[j].substr(1).toLowerCase())
        }
        result.push(arrResult.join(' '))
    }
    return result
}
console.log(titleCase(['mohanraj selvam','maheswari selvam'])) //['Mohanraj Selvam','Maheswari Selvam']
