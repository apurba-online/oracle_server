const express = require("express");
const getConnection = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.get("/data", async (req, res) => {
  let connection;
  try {
    connection = await getConnection();
    const result = await connection.execute("SELECT * FROM your_table FETCH FIRST 10 ROWS ONLY");
    res.json({ data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) {
      await connection.close();
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
