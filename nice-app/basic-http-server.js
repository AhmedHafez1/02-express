const { createServer } = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html', 'utf8');
const homeStyle = readFileSync('./style.css', 'utf8');
const homeLogic = readFileSync('./script.js', 'utf8');

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (req.url === '/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homeStyle);
    res.end();
  } else if (req.url === '/script.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homeLogic);
    res.end();
  } else {
    res.writeHead(404, 'Not found', { 'content-type': 'text/plain' });
    res.write('Not Found');
    res.end();
  }
});

server.listen(5000);
