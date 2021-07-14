const readline = require('readline');
const { exec } = require('child_process');
const chalk = require('chalk');
const fs = require('fs');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

// example of how to use calk
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);



const titleOptions = `${chalk.green('Seleccione una opcion:: \n')}`;
// const options = [
// 	{text:`  sum-big-numbers`, active: true},
// 	{text:`  greek game`, active: false}, 
// 	{text:`  invert string`, active: false}
// ];
let options = []
console.log(Object.keys(rl))
/*
 * @description 
 * @params direction: number
 */
const updateOptions = (direction) => {
	const actualActiveIndex = options.findIndex(({ active }) => active);
	console.log('actualActiveIndex', actualActiveIndex);
	const newIndex = direction + actualActiveIndex;
	console.log('newIndex', newIndex);
	options[newIndex].active = true;
	options[actualActiveIndex].active = false;
}

const optionsToText = () => {
	return `${titleOptions}\n${options.map(({ text, active }) => chalk[active ? 'blue' : 'green']`${active ? '■' : '□'}${text}`).join('\n')}`
};

const init = () => {
	const projects = fs.readdirSync('./src');
	options = projects.map((name, index) => ({ text: `  ${name}`, active: index === 0 }));
	rl.output.write(optionsToText());
}

// const values = ['lorem ipsum', 'dolor sit amet'];
// const rlTest = readline.createInterface(process.stdin);
process.stdin.on('keypress', (c, k) => {
	if (k.name === 'up') {
		updateOptions(-1);
		// write again in control doesnt update the actual screen
		// needs to rerender de screen with the options 
		rl.output.write('\u001Bc');
		rl.output.write(optionsToText())
	};

	if (k.name === 'down') {
		updateOptions(1);
		rl.output.write('\u001Bc')
		rl.output.write(optionsToText())
	};

	if (k.name === 'space') {
		exec(`node ./src/${options.find(({ active }) => active).text.replace('  ', '')}`, (error, stdout, stderr) => {
			if (error) {
				console.log(`general exec error: ${error.message}`)
				return
			}
			if (stderr) {
				console.log(`stderr: ${stderr}`)
				return
			}
			console.log("node exec succes --------------------")
			console.log(stdout)
			rl.close()
			process.exit(0)
		})
	}
	console.log(k)

})

init();

// useful code for future
// rl.output.write('\u001Bc') clean terminal

//	rl.question('prueba consola escribe ruta del archivo ■ □    \n', (response) => {
//		console.log(`the path you write is the next one: ${response}`)
//		console.log(JSON.stringify(response, null, 2))
//		exec(`node ${response}`, (error, stdout, stderr) => {
//			if(error) {
//				console.log(`general exec error: ${error.message}`)
//				return
//			}
//			if(stderr) {
//				console.log(`stderr: ${stderr}`)
//				return
//			}
//			console.log("node exec succes --------------------")
//			console.log(stdout)
//			rl.close()
//			process.exit(0)
//		})
//	})

