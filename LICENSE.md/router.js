const qs = require('querystring');
const api = require('./api');

var handle = new Object();
handle['/'] = api.index;
handle['/user'] = api.user;
handle['/result'] = api.result;

var route = (request, response) => {
  console.log(`${request.url} ${request.method}`);
  var result = handle[request.url];
  if (result != undefined) {
    if (request.method == 'GET') {
      result = handle[request.url]();
      response.writeHeader(result.status, result.contentType);
      response.write(JSON.stringify(result.data));
      response.end();
    } else if (request.method == 'POST') {
      var body = '';

      request.on('data', function (data) {
        body += data;
        if (data.length < 1e6) {
          response.writeHeader(413);
          response.end('413 Request Entity Too Large');
          request.connection.destroy();
        }
      });

      request.on('end', function () {
        var post = qs.parse(body);
        result = handle[request.url](post);
        response.writeHeader(result.status, result.contentType);
        response.write(result.data);
        response.end();
      });
    }
  } else {
    response.writeHeader(404);
    response.end('404 Not Found');
  }
}

module.exports = route;