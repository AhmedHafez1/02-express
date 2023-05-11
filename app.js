const { products, people } = require("./data");
const express = require("express");
const app = express();
const logger = require("./logger");
const auth = require("./auth");
const morgan = require("morgan");

// app.use('/api', logger);

app.use(morgan("tiny"));
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/products", (req, res) => {
  res.status(200).json(products);
});

app.post("/login", (req, res) => {
  const { name } = req?.body;
  if (name) {
    res.status(200).send("Logged in successfully");
  } else {
    res.status(401).send("Unauthorized");
  }
});

app.get("/api/people", (req, res) => {
  res.json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;

  if (name) {
    res.status(201).json({ success: true, person: name });
  }
  res.status(400).json({ success: false, msg: "Noo Name" });
});

app.get("/api/user", (req, res) => {
  res.json(req.user);
});

app.listen(5000);
