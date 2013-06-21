/**
 * @fileoverview demonstrates streams.
 */

/*
// reading a file from the file system.
var fs = require('fs');

var file = fs.createReadStream('index.html');

*/
/*
// Using the readFile function instead to read
// the entire contents of the file.
var fs = require('fs');

*/

/*
// Create a server using readFile function.
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {

});
server.listen(21000);
*/

/*
// Create a server by piping the contents into the response.
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {

});
server.listen(21000);
*/