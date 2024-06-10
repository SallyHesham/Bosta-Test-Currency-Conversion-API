var http = require('http');
var url = require('url');
var rates = require('./ExtConvAPI');

http.createServer(async function (req, res) {
  var q = url.parse(req.url, true);
  var query = q.query;
  var [response, error, body] = await rates.getRate(query);
    res.writeHead(response.statusCode, {'Content-Type': 'text/html'});
    if (error) {
        res.write(JSON.stringify(error));
    } else {
        res.write(JSON.stringify(body));
    }
    res.end();
    return res;
}).listen(8080);