function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;
	let mid;
	while (left <= right) {
		mid = Math.floor((left + right) / 2);
		console.log(
			`Left: ${left}, Right: ${right}, Mid: ${mid}, Mid Value: ${arr[mid]}`,
		);
		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left; // Target not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 0;
const result = binarySearch(sortedArray, targetValue);
console.log(`Target ${targetValue} found at index: ${result}`);
