const express = require('express');
const app = express();
const logger = require('./logger');
const morgan = require('morgan');
const people = require('./routes/people');
const products = require('./routes/products');
const auth = require('./routes/auth');

app.use('/api', logger);
app.use(morgan('tiny'));
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', people);
app.use('/api/products', products);
app.use('/api/auth', auth);

app.listen(5000);
