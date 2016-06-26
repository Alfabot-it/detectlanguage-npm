var request = require('request');

var detectlanguage = function(options) {
  var self = this;
  if (options === undefined || options === null || options.constructor.name !== "Object") {
    throw new Error("options object is mandatory");
  }
  if (options.token === undefined || options.token === null) {
    throw new Error("options.token is mandatory");
  }
  if (options.version === undefined) {
    options.version = "0.2";
  }
  self.options = options;
  self.options.basic_url = "http://ws.detectlanguage.com/"+self.options.version+"/detect?key="+self.options.token+"&q=";
};

detectlanguage.prototype.detect = function(text, cb) {
  var self = this;
  if (text === null || text === undefined || cb === null || cb === undefined) {
    throw new Error("text and callback are mandatory params");
  }
  var err;
  request({url: self.options.basic_url+text, json: true}, function(error, response, body) {
    console.log(body.data);
    if (error !== undefined) {
      err = error;
    }
    if (body.error !== undefined) {
      err = body.error;
    }
    cb(err, body.data);
  });
};

module.exports = detectlanguage;
