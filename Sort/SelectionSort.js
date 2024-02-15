function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let end = arr.length - i - 1
        let maxIndex = max(0, end, arr);
        let temp = arr[end];
        arr[end] = arr[maxIndex];
        arr[maxIndex] = temp
    }
    return arr
}

function max(start, end, arr){
    let max = end;
    for(let i = start; i <= end; i++){
          if (arr[max] < arr[i]) {
              max = i
          }
    }
    return max;
}

let array = [1,3,5,6,4];
let SortedArray = selectionSort(array);
console.log(SortedArray)