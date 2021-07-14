import React, { useState } from 'react';
import { exec } from 'child_process';
import fs from 'fs';
import { render, Text, Box, Spacer, useInput, useApp } from 'ink';
// '■' : '□'
//

const init = () => {
	const projects = fs.readdirSync('./src');
	return projects.map((name, index) => ({ text: `  ${name}`, active: index === 0 }));
}

/*
 * @description move the options active, direction 1 down and -1 up 
 * @params direction: number
 */
const updateOptions = (direction, options) => {
	const actualActiveIndex = options.findIndex(({ active }) => active);
	const newIndex = direction + actualActiveIndex;
	options[newIndex].active = true;
	options[actualActiveIndex].active = false;
	return options
}

/**
 * @description Executes script selected
 * @params script string
 */
const executeScript = (script) => {
	exec(`node ./src/${script.trim()}`, (error, stdout, stderr) => {
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
		process.exit(0)
	})
}

const Demo = () => {
	const [options, setOptions] = useState(init());
	const { exit } = useApp();

	useInput((_, key) => {
		if (key.upArrow) {
			const auxOptions = updateOptions(-1, options)
			setOptions([...auxOptions]);
		}

		if (key.downArrow) {
			const auxOptions = updateOptions(1, options)
			setOptions([...auxOptions]);
		}

		if (key.escape) {
			exit();
		}

		if (key.return) {
			const selectedOption = options.find(({ active }) => active).text;
			executeScript(selectedOption)
		}
	})

	return (
		<Box flexDirection="column">
			<Box>
				<Text>Seleccione una de las siguientes opciones</Text>
			</Box>
			<Spacer />
			<Box flexDirection="column">
				{
					options.map(({ text, active }) => (
						<Text key={text} color={active ? 'blue' : 'white'}>{active ? '■' : '□'} {text}</Text>
					))
				}
			</Box>
		</Box>
	)
};

consjfalsjdflkajsf

init();
render(<Demo />);
