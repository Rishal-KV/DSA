function isArraySorted(arr = []) {
	if (!Array.isArray(arr)) {
		throw new TypeError("Input must be an array");
	}

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < arr[i - 1]) {
			return false;
		}
	}
	return true;
}
const arr = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr));
