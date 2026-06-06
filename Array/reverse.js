const arr = [1, 2, 3, 4];
function reverseArray(arr) {
	let left = 0;
	let right = arr.length - 1;
	let temp;
	let i = 0;
	let mid = Math.floor(arr.length / 2);
	while (i < mid) {
		temp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = temp;
		i++;
	}
}
console.log("Original Array:", arr);
reverseArray(arr);
console.log("Reversed Array:", arr);
