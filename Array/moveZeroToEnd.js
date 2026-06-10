let x = [1, 0, 2, 0, 3, 4];
const moveZeroToEnd = (arr) => {
	const temp = [];
	for (let [index, val] of arr.entries()) {
		console.log(arr.entries());
		if (val === 0) {
			temp.push(val);
			x.splice(index, 1);
		}
	}

	return [...x, ...temp];
};

console.log(moveZeroToEnd(x));
