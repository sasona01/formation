const productService = require("./Task_1");

async function main() {
  await productService.insertProducts();
}

main();