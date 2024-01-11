const http = require('http');
const port = 3010;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Http server running at port ${port}`);
});