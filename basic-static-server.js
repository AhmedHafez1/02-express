const path = require('path');
const express = require('express');
const app = express();

const staticPath = path.resolve(__dirname, './public');
const homePath = path.resolve(__dirname, './navbar-app/index.html');
const aboutPath = path.resolve(__dirname, './nice-app/index.html');

app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(homePath));
});

app.get('/about.html', (req, res) => {
  res.sendFile(aboutPath);
});

app.all('*', (req, res) => {
  res.status(404).send('Resource not found!');
});

app.listen(5000, () => console.log('Server is listening on port 5000'));
