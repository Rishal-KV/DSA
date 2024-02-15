function insertionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j > 0; j--){
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp
            }else{
                break;
            }
        }
    }
    return arr
}
let array = [5,2,6,3,1];

let SortedArray = insertionSort(array)
console.log(SortedArray);