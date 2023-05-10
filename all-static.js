const express = require('express');
const app = express();

app.use(express.static('./public'));

app.all('*', (req, res) =>
  res.status(404).send('<h1 style="color:red;">Resource not found</h1>')
);

app.listen(5000, function () {
  console.log('Server is listening on port 5000');
});
