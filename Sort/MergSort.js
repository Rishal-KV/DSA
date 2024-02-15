let arr = [2,1,5,4,3]
function mergeSort(arr){
    if(arr.length == 1){
        return arr
    }
   let mid = Math.floor(arr.length / 2);
   let left = arr.slice(0,mid);
   let right = arr.slice(mid);
   let leftSorted = mergeSort(left)
   let RightSorted = mergeSort(right)
   return merge(leftSorted, RightSorted)
}
function merge(left, right){
    let arr = []
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length ){
        if(left[leftIndex] < right[rightIndex]){
            arr.push(left[leftIndex])
            leftIndex++;
        }else{
            arr.push(right[rightIndex])
            rightIndex++
        }
    }

    while (leftIndex < left.length) {
        arr.push(left[leftIndex]) 
        leftIndex++;
    }

    while (rightIndex < right.length) {
        arr.push(right[rightIndex]);
        rightIndex++;
        
    }
    return arr;
}

console.log(mergeSort(arr));

