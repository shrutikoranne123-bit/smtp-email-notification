const http = require('http');

http.createServer((req, res) => {
  res.end('ARM64 container running on AMD64 Ubuntu EC2 for SMTP notification');
}).listen(3000);
