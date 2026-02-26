const fs = require('fs');

function readFile(file) {
  return fs.readFileSync(file, 'utf-8');
}

function writeFile(file, content) {
  fs.writeFileSync(file, content);
}

module.exports = { readFile, writeFile };