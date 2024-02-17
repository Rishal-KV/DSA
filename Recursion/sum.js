function sum(index,arr){
  
    if (index == arr.length) {
        return 0
    }
    return arr[index] + sum(index + 1, arr)
}

let arr = [1,2,3,4,5];
console.log(sum(0,arr))