function stringDemcompress(str = "a3b2c1") {
	let result = "";

	for (let i = 0; i < str.length; i++) {
		if (i % 2 != 0) {
			let char = str[i - 1];
			let num = parseInt(str[i]);
			result += char.repeat(num);
		}
	}
	return result;
}
const str = "a3b2c1";
console.log(stringDemcompress(str));
