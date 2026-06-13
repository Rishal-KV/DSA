const arr = ["h", "e", "l", "l", "o"];

function reverse(arr) {
	let right = arr.length - 1;
	let left = 0;

	while (left < right) {
		let temp = arr[left];
		arr[left] = arr[right];
		arr[right] = temp;
		left++;
		right--;
	}
}

reverse(arr);
console.log(arr);
