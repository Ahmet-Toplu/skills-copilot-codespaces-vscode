// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. The comments.html file should be created in the same directory as your comments.js file. The comments.html file should have an h1 tag with the text Comments and an empty unordered list with an id of comments-list.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(3000);