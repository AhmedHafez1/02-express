const { products, people } = require("./data");
const express = require("express");
const app = express();
const logger = require("./logger");
const auth = require("./auth");
const morgan = require("morgan");

// app.use('/api', logger);

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/orders", (req, res) => {
  res.send("Orders");
});

app.get("/api/user", (req, res) => {
  res.json(req.user);
});

app.listen(5000);
