import { writeFile } from 'fs';

const content = [
	'*',
	'!index.html',
	'!favicon.ico',
	'!inline.bundle.js',
	'!main.bundle.js',
	'!polyfills.bundle.js',
	'!styles.bundle.js',
	'!vendor.bundle.js'
].join('\n');

const path = './.gitignore';
writeFile(path, content, (writeErr) => {
	if (!writeErr) {
		console.log(`success write ${path}`);
	}
});
