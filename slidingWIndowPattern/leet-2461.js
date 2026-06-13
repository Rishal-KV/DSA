/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
	let max = 0;
	let added = new Set();

	for (let i = 0; i < k; i++) {
		if (!added.has(nums[i])) {
			max = max + nums[i];
			added.add(nums[i]);
		}
	}

	let newMax = max;

	for (let i = k; i < nums.length; i++) {
		console.log(added);
		if (!added.has(nums[i])) {
			newMax = newMax - nums[i - k] + nums[i];
			console.log(newMax);
			added.add(nums[i]);

			if (newMax > max) {
				max = newMax;
			}
		}
	}

	return max;
};
let nums = [1, 5, 4, 2, 9, 9, 9];
let k = 3;
console.log(maximumSubarraySum(nums, k));
