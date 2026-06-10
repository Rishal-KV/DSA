function validParentheses(s) {
	const stack = [];
	const map = {
		"(": ")",
		"{": "}",
		"[": "]",
	};

	for (let char of s) {
		console.log(stack);
		if (map[char]) {
			stack.push(char);
		} else {
			const last = stack.pop();
			if (map[last] !== char) {
				return false;
			}
		}
	}

	return stack.length === 0;
}
const s = "()[]{}";
console.log(validParentheses(s));
