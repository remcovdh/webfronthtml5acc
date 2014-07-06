var static = require('node-static');
var http = require('http');
var file = new static.Server('.', { cache: 7200, headers: {'X-Hello':'World!'} });

var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(2025);

