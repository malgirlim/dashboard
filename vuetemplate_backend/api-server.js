const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const { sql, pool } = require("./mssql");

app.use(bodyParser.json());

// 조회
app.get("/api/notice", async (req, res) => {
  try {
    const Pool = await pool;
    const result = await Pool.request().query("SELECT * FROM mhp_vuetemplat");

    res.send(result.recordset);
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
