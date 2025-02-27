require("dotenv").config();
const oracledb = require("oracledb");

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectString: process.env.DB_CONNECTION_STRING,
};

async function getConnection() {
  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    console.error("Database connection error:", err);
    throw new Error("Failed to connect to OracleDB.");
  }
}

module.exports = getConnection;
