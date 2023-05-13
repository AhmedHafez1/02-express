const express = require('express');
const app = express();
const logger = require('./logger');
const auth = require('./auth');
const morgan = require('morgan');
const people = require('./routes/people');
const products = require('./routes/products');

app.use('/api', logger);
app.use(morgan('tiny'));
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', people);
app.use('/api/products', products);

app.post('/login', (req, res) => {
  const { name } = req?.body;
  if (name) {
    res.status(200).send('Logged in successfully');
  } else {
    res.status(401).send('Unauthorized');
  }
});

app.get('/api/user', (req, res) => {
  res.json(req.user);
});

app.listen(5000);
