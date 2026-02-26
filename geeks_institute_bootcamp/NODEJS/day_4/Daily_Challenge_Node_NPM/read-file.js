const fs = require('fs');

function readFileContent() {
  fs.readFile('file-data.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file ❌", err);
    } else {
      console.log("File content 📄:");
      console.log(data);
    }
  });
}

module.exports = readFileContent;