function selectionSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var max = arr.length - i - 1;
        var maxIndex = findMax(0, max, arr);
        var temp = arr[max];
        arr[max] = arr[maxIndex];
        arr[maxIndex] = temp;
    }
    return arr;
}
function findMax(start, end, arr) {
    var max = end;
    for (var i = start; i <= end; i++) {
        if (arr[max] < arr[i]) {
            max = i;
        }
    }
    return max;
}
var sorted = selectionSort([33, 2, 52, 106, 73, 300, 19, 12, 1, 60]);
console.log(sorted);
