const { products, people } = require("./data");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send('<h2><a href="/api/products">Products API</a></h2>');
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === +id);

  if (!product) res.status(404).send("<h2>Product does not exist</h2>");

  res.status(200).json(product);
});

app.listen(5000);
