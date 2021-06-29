const scoreModule = require('../index');
const {score, scoreBetter} = scoreModule;
const chai = require('chai');
const assert = chai.assert;
describe( "Scorer Function", function() {
	it( "should value this as worthless", function() {
		assert.equal( score( [2, 3, 4, 6, 2] ), 0 );
	});

	it( "should value this triplet correctly", function() {
		assert.equal( score( [4, 4, 4, 3, 3] ), 400 );
	});

	it( "should value this mixed set correctly", function() {
		assert.equal( score( [2, 4, 4, 5, 4] ), 450 );
	});
	 it('should value [3,3,3,3,3] equal to 300', () => {
	 	assert.equal(score([3,3,3,3,3]), 300);
	 })
});
describe( "Scorer Function better solution", function() {
	it( "should value this as worthless", function() {
		assert.equal( scoreBetter( [2, 3, 4, 6, 2] ), 0 );
	});

	it( "should value this triplet correctly", function() {
		assert.equal( scoreBetter( [4, 4, 4, 3, 3] ), 400 );
	});

	it( "should value this mixed set correctly", function() {
		assert.equal( scoreBetter( [2, 4, 4, 5, 4] ), 450 );
	});
	it('should value [3,3,3,3,3] equal to 300', () => {
		assert.equal(scoreBetter([3,3,3,3,3]), 300);
	})
});
