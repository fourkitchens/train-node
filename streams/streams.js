/**
 * @fileoverview demonstrates streams.
 */

// reading a file from the file system.
/*
var fs = require('fs');

var file = fs.createReadStream('index.html');

file.on('data', function(chunk){
  console.log(chunk.toString());
});
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        if (err) {
            res.statusCode = 500;
            res.end(String(err));
        }
        else res.end(data);
    });
});
server.listen(21000);