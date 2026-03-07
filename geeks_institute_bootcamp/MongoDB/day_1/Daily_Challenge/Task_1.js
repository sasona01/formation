const connectDB = require("./config/db");

async function insertProducts() {
  const db = await connectDB();

  const products = [
    { name: "Laptop", category: "Electronics", price: 1200, stock: 15 },
    { name: "Wireless Mouse", category: "Electronics", price: 25, stock: 100 },
    { name: "Notebook", category: "Stationery", price: 5, stock: 50 },
    { name: "Desk Lamp", category: "Home", price: 30, stock: 8 },
    { name: "Pen Set", category: "Stationery", price: 10, stock: 3 }
  ];

  const result = await db.collection("products").insertMany(products);

  console.log("Products inserted:", result.insertedCount);
}

module.exports = { insertProducts };