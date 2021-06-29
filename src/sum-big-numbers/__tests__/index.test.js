const addModule = require('../index');
const {addBetter, add} = addModule;
const chai = require('chai');
const assert = chai.assert;
describe("Add two numbers", function(){
	it("should pass basic tests", function() {
		assert.equal(add("1", "1"), "2");
		assert.equal(add("123", "456"), "579");
		assert.equal(add("999999999", "1"), "1000000000");
		assert.equal(add("888", "222"), "1110");
		assert.equal(add("1372", "69"), "1441");
		assert.equal(add("12", "456"), "468");
		assert.equal(add("101", "100"), "201");
		assert.equal(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
	});
	it("should pass with better adding", function() {
		assert.equal(addBetter("1", "1"), "2");
		assert.equal(addBetter("123", "456"), "579");
		assert.equal(addBetter("999999999", "1"), "1000000000");
		assert.equal(addBetter("888", "222"), "1110");
		assert.equal(addBetter("1372", "69"), "1441");
		assert.equal(addBetter("12", "456"), "468");
		assert.equal(addBetter("101", "100"), "201");
		assert.equal(addBetter('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
	});
});
