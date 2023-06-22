const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('こんにちは、こちらは実証的ソフトウェア工学研究室です。');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
