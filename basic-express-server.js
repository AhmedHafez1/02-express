const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Home Page!'));
app.get('/about', (req, res) => res.send('About World!'));
app.get('/contact', (req, res) => res.send('Contact World!'));
app.all('*', (req, res) =>
  res.status(404).send('<h1>Resource not found</h1>`')
);

app.listen(port, () => console.log(`server is listening on port ${port}!`));
