let arr  = [1,2,3,4,5,6];

function LinearSearch(key){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == key) {
             return arr[i]
        }
    }
    return undefined
}