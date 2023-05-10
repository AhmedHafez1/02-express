const { products, people } = require("./data");
const express = require("express");
const app = express();

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.listen(5000);
