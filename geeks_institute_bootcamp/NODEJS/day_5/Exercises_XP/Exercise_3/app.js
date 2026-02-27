const express = require('express');
const { fetchPosts } = require('./dataService');

const app = express();

app.get('/posts', async (req, res) => {
  try {
    const data = await fetchPosts();
    console.log("Data fetched successfully ✅");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data ❌" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});