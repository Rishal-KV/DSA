let A = [ 0, 1, 0, 2, 1, 1, 0, 2, 2, 0, 1 ];

let low = 0;
let high = A.length - 1;
let mid = 0;

while(mid <= high){
    if(A[mid] == 0){
        swap(A,low,mid)
        low++;
        mid++;
    }else if(A[mid] == 1){
        mid++
    }else{
        swap(A,mid,high);
        high--
    }
}

function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp
}
console.log(A)