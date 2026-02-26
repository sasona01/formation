const chalk = require('chalk');

function showMessage() {
  console.log(chalk.blue("Hello World 🌍"));
  console.log(chalk.green("Success message ✅"));
  console.log(chalk.red("Error message ❌"));
}

module.exports = showMessage;