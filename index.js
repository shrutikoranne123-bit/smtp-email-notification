const http = require('http');

http.createServer((req, res) => {
  res.end('ARM64 container running on AMD64 Ubuntu EC2');
}).listen(3000);
