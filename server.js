var easyimg = require('easyimage');

var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   easyimg.info('https://www.google.com/images/srpr/logo3w.png', function(err, stdout, stderr) {
        if (err) throw err;
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end(stdout);
    });
}).listen(process.env.PORT);