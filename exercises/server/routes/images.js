var request = require('superagent');
var Stream = require('stream');
 
/**
 * Get Images function
 *
 */
module.exports  = function images(url, fn) {
  var data = '';
  // Set up a stream to pipe data to.
  // @see https://github.com/substack/stream-handbook#writable
  var stream = new Stream();
  stream.writable = true;
 
  /**
   * The stream's write behavior.
   */
  stream.write = function(buf) {
    if (buf && typeof buf.toString !== 'undefined') {
      data += buf.toString();
    }
  };
 
  /**
   * The stream's end behavior.
   */
  stream.end = function(buf) {
    stream.write(buf);
    stream.writable = false;
    fn(null, data);
  };
 
  /**
   * The stream's destroy behavior.
   */
  stream.destroy = function() {
    stream.writable = false;
  };
 
  // Request the URL. The accept header was lifted from a Google
  // Chrome request. The user agent is custom.
  var req = request
    .get(url)
    .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8')
    .set('User-Agent', 'node.js training ❤ Four Kitchens');
 
  // Pipe the result to our stream.
  req.pipe(stream);
};