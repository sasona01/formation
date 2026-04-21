const { pool } = require('../db');

const getAllItems = async () => {
  const result = await pool.query('SELECT * FROM menu_items');
  return result.rows;
};

const getItemByName = async (name) => {
  const result = await pool.query(
    'SELECT * FROM menu_items WHERE item_name = $1',
    [name]
  );
  return result.rows[0];
};
const getItemById = async (id) => {
  await pool.query(
    'select * FROM menu_items WHERE item_id = $1',
    [id]
  );
};

const createItem = async (name, price) => {
  const result = await pool.query(
    'INSERT INTO menu_items (item_name, item_price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return result.rows[0];
};

const updateItem = async (id, name, price) => {
  const result = await pool.query(
    'UPDATE menu_items SET item_name = $1, item_price = $2 WHERE item_id = $3 RETURNING *',
    [name, price, id]
  );
  return result.rows[0];
};

const deleteItem = async (id) => {
  await pool.query(
    'DELETE FROM menu_items WHERE item_id = $1',
    [id]
  );
};

module.exports = {
  getAllItems,
  getItemByName,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};