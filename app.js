const { products, people } = require('./data');
const express = require('express');
const app = express();

const logger = (req, res, next) => {
  console.log(req.url, req.method, new Date().toLocaleString());
  next();
};

app.get('/', logger, (req, res) => {
  res.status(200).send('Welcome');
});

app.listen(5000);
