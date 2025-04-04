import promisePool from './src/utils/database.js';
const testConnection = async () => {
  try {
    const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
    console.log('Database connection successful:', rows);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  } finally {
    promisePool.end();
  }
};

testConnection();
