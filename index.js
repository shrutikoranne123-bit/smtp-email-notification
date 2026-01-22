const http = require("http");

http.createServer((req, res) => {
  res.end("ARM64 app running on AMD64 EC2--> SHRUTI 🚀");
}).listen(3000);