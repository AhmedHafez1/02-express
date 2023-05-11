const { products, people } = require('./data');
const express = require('express');
const app = express();
const logger = require('./logger');

app.use('/api', logger);

app.get('/', (req, res) => {
  res.status(200).send('Welcome');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/orders', (req, res) => {
  res.send('Orders');
});

app.listen(5000);
