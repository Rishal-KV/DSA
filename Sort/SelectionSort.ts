function selectionSort(arr:number[]): number[]{
 for(let i = 0 ; i < arr.length ; i++){
    let max = arr.length - i - 1;
    let maxIndex = findMax(0,max,arr);
    let temp = arr[max];
    arr[max] = arr[maxIndex];
    arr[maxIndex] = temp
 }
 return arr
}

function findMax(start:number, end:number, arr:number[]):number{
    let max = end;
    for(let i = start; i <= end; i++){
        if(arr[max] < arr[i]){
            max = i
        }
    }
    return max
}

const sorted:number[] = selectionSort([33,2,52,106,73,300,19,12,1,60])
console.log(sorted)