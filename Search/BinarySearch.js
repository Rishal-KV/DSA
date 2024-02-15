// function binarySearch(target = 5, arr = [1,2,3,4,5]){
//     let start = 0;
//     let end = arr.length - 1;
//     while (start <= end) {
//         let mid = Math.floor((start + end) / 2)
//         if (target == arr[mid]) {
//             return mid
//         }
//         if (target < arr[mid]) {
//             end = mid - 1
//         }else{
//             start = mid + 1
//         }
//     }
//     return undefined;
// };

// console.log(binarySearch())


function binarySearch(target, arr, start = 0, end =  arr.length - 1){
    if (start > end) {
        return - 1
    }
    let mid = Math.floor((start + end) / 2)
    if (target === arr[mid]) {
        return mid;
    }
    if (target < arr[mid] ) {
         return binarySearch(target, arr, start, end = mid - 1)
    }else{
        return binarySearch(target, arr, start = mid + 1, end);
    }

}

console.log(binarySearch(3,[1,2,3,4,5]))