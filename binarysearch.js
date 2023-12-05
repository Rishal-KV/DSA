let arr = [1,10,30,40,50];


function binarySearch(arr,target){
   let start = 0;
   let end = arr.length - 1;
   while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (target < arr[middle]) {

        end = middle - 1
        
    }else if(target > arr[middle]){
       start = middle + 1
    }else{
        return middle
    }
   }
}

console.log(binarySearch(arr,10));