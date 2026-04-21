const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'restaurant_db',
  password: 'gi@gi',
  port: 5432,
});
const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Database connected successfully');
    console.log('🕒 Time:', res.rows[0]);
  } catch (err) {
    console.error('❌ Database connection failed');
    console.error(err.message);
  }
};

module.exports = {
  pool,
  testConnection,
};