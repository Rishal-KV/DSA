let arr = [1,2,3,4];

for(let i = 0; i < arr.length; i++){
    if (arr[i]% 2 == 0) {
        arr[i] = arr[i] * 2;
    }
}
console.log(arr);