
var static = require('node-static');
var https = require('https');
var file = new(static.Server)();
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var app = https.createServer(options, function (req, res) {
  file.serve(req, res);
}).listen(2029);



