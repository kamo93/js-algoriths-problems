function add(a, b) {
	let addSum = '';
	let left = 0;
	if(Number(b) > Number(a)) {
		const temp = a;
		a = b;
		b = temp;
	}
	for(let i = 0; i < a.length; i++) {
		const addNumber = i > (b.length - 1) ? 0 : Number(b[b.length - i -1]);
		let result = Number(a[a.length - i - 1]) + addNumber + left;
		if(result > 9) {
			addSum = (a.length - 1 === i ? result : (result % 10)) + '' + addSum;
			left = 1;
		} else {
			left = 0;
			addSum = result + '' + addSum;
		}
	}
	return addSum
}
function addBetter (a, b) {
	var res = '', c = 0
	a = a.split('')
	b = b.split('')
	while (a.length || b.length || c) {
		console.log(a,b,~3)
		c += ~~a.pop() + ~~b.pop()
		res = c % 10 + res
		c = c > 9
	}
	return res
}
module.exports = {
	add,
	addBetter
};
