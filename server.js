var http = require('http');
var easyimg = require('easyimage');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   easyimg.info('https://www.google.com/images/srpr/logo3w.png', function(err, stdout, stderr) {
       res.writeHead(200, {"Content-Type": "text/plain"});
        if (err) throw err;
        res.end(stdout);
    });
}).listen(process.env.PORT);