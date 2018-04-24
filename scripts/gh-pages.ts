import { writeFile } from 'fs';

const content = [
	'*',
	'!index.html',
	'!favicon.ico',
	'!inline.*',
	'!main.*',
	'!polyfills.*',
	'!styles.*',
	'!vendor.*'
].join('\n');

const path = './.gitignore';
writeFile(path, content, (writeErr) => {
	if (!writeErr) {
		console.log(`success write ${path}`);
	}
});
