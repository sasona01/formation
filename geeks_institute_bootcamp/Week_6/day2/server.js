const express = require('express');
const app = express();

const menuRoutes = require('./routes/menuRoutes');

app.use(express.json());

app.use('/api/menu', menuRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});