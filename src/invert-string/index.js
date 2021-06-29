const assert = require('assert');
function reverse(str) {
	if(str.length === 1){
		return str
	}
	return str.slice(-1) + reverse(str.slice(0, str.length - 1))
}
async function it(str, cb) {
	try {
		await cb()
		console.log(`%c success ${str}`, 'color: #bada55')
	} catch (e) {
		console.error(`X ${str}, ${e}`)
	}
}
it('should return nivek', () => {
	assert.equal(reverse('kevin'), 'nivek')
})
console.log(reverse('kevin'))
