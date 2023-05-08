const { createServer } = require('http');

const server = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>1234</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>5678</h1>');
    res.end();
  } else {
    res.writeHead(404, 'Not found', { 'content-type': 'text/plain' });
    res.write('OOO');
    res.end();
  }
});

server.listen(5000);
