const greet = require('./greeting');
const showMessage = require('./colorful-message');
const readFileContent = require('./read-file');

// 1. Greeting
console.log(greet("Alae"));

// 2. Colorful message
showMessage();

// 3. Read file
readFileContent();