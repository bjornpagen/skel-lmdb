import { open } from 'lmdb'; // or require
let myDB = open({
	path: 'db',
	compression: true,
});
myDB.transaction(() => {
	myDB.put('greeting', { someText: 'Hello, World!' });
	console.log(myDB.get('greeting').someText); // 'Hello, World!'
});