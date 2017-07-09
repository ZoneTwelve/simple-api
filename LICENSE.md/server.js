//RUN SERVER

const http = require('http');
const url = require('url');

var bin = (port, route) => {
  http.createServer(route).listen(port);
  console.log(`Server list on ${port}`);
}

module.exports = bin;