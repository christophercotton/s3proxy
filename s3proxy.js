var httpProxy = require('http-proxy');

var port = process.env.PORT || 8000;

httpProxy.createServer(function (req, res, proxy) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.headers['host'] = 's3.amazonaws.com'
  proxy.proxyRequest(req, res,   {
    host: 's3.amazonaws.com',
    port: 80
  });

}).listen(port);
