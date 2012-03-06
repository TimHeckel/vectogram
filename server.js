var easyimg = require('easyimage');
easyimg.info('https://www.google.com/images/srpr/logo3w.png', function(err, stdout, stderr) {
    if (err) throw err;
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(stdout);      
});