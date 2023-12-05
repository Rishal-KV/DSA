
//bubble
// console.log(bubbleSort([1,2,3,4,5]));
// function bubbleSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let swapped = false
//         for(let j = 1 ; j < arr.length - i - 1 ; i++){
//             if (arr[j] < arr[j - 1]) {
                
//                 let temp = arr[j];
//                 arr[j] = arr[j - 1];
//                 arr[j - 1] = temp
//                 swapped = true
//             }
//         }
//         if (!swapped) {
//             break;
//         }
//     }
//     return arr
// }


//selectionSort;
let arr = [1,5,3,2]
// function selectionSort(arr){
//   for(let i = 0; i < arr.length; i++){
//     let end = arr.length - 1 - i
//      let maxIndex = max( 0, arr, end)
//      let temp = arr[end];
//      arr[end] = arr[maxIndex];
//      arr[maxIndex] = temp

//   }
// }

// function max(start ,arr, end){
//     let max = end

// for(let i = start; i <= end; i++){
//     if (arr[max] < arr[i]) {
        
//         max = i
//     }
// }

// return max

// }

// selectionSort(arr)
// console.log(arr);


//selectionSort

// function selectionSort(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = i + 1; j > 0; j--){
//             if (arr[j] < arr[j - 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j - 1]
//                 arr[j - 1] = temp
//             }else{
//                 break
//             }
//         }
//     }
//     return arr
// }
// console.log(selectionSort(arr));


//merge sort

function mergeSort(arr){
    if (arr.length == 1) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0,mid)
  let right = arr.slice(mid);
  let leftSorted = mergeSort(left)
  let rightSorted = mergeSort(right)

  return merge(leftSorted,rightSorted)
}



function merge(left, right){
    let leftIndex = 0;
    let rightIndex = 0;
    let arr = []

    while( leftIndex < left.length && rightIndex < right.length ){
        if (left[leftIndex] < right[rightIndex]) {
            arr.push(left[leftIndex])
            leftIndex++
            
        }else{
            arr.push(right[rightIndex])
            rightIndex++
        }
    }
    while(leftIndex < left.length){
        arr.push(left[leftIndex])
        leftIndex++
    }
    while (rightIndex < right.length) {
        arr.push(right[rightIndex])
        rightIndex++
    }
    return arr
}

console.log(mergeSort(arr))