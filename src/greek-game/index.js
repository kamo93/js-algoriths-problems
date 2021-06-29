function score( dice ) {
	// Fill me in!
	let total = 0;
	const object = {};
	for(let element of dice) {
		if(!object[element]){
			object[element] = 1;
		} else {
			object[element] = object[element] + 1;
		}
	}
	if(object['1'] >= 3){
		total = total + 1000;
		object['1'] = object['1'] - 3;
	}
	if(object['1']) {
		total = total + (object['1'] * 100);
	}
	if(object['2'] >= 3){
		total = total + 200;
	}
	if(object['3'] >= 3){
		total = total + 300;
	}
	if(object['4'] >= 3){
		total = total + 400;
	}
	if(object['5'] >= 3){
		total = total + 500;
		object['5'] = object['5'] - 3;
	}
	if(object['5']) {
		total = total + (object['5'] * 50)
	}
	if(object['6'] >= 3) {
		total = total + 600;
	}
	return total;
}

function scoreBetter (dice) {
	const totalDice = [0,0,0,0,0,0];
	const tripletsValues = [1000, 200, 300, 400, 500, 600];
	// remember play that any multiplying 0 is 0
	const singleValues = [100, 0, 0, 0, 50, 0];
	// calculate totals per face of the dice
	dice.forEach(diceValue => totalDice[diceValue - 1]++);
	return totalDice.reduce((acc, totalFaceDice, i) => {
		// use module becuase if is less than 3 with substract result is negative
		return acc + ( totalFaceDice >= 3 ? tripletsValues[i] : 0 ) + (singleValues[i]*(totalFaceDice % 3))
	}, 0)

}
module.exports = {
	score,
	scoreBetter
}
