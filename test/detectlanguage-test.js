'use-strict';
require('should');
describe("should throw error is params are invalid", function() {
  it("throws error if no option is given", function(done) {
    var dT = require('../lib/detectlanguage');
    try {
      var detect = new dT();
    } catch(e) {
      e.message.should.equal("options object is mandatory")
      done();
    }
  });
  it("throws error if no token is given", function(done) {
    var dT = require('../lib/detectlanguage');
    try {
      var detect = new dT({foo: "bar"});
    } catch(e) {
      e.message.should.equal("options.token is mandatory")
      done();
    }
  });
});

describe("should work in different languages and case", function() {
  it("should detect an english phrase", function(done) {
    var dT = require('../lib/detectlanguage');
    var detect = new dT({token: "demo"});
    detect.detect("hi how are you?", function(err, data) {
      data.detections[0].language.should.equal("en");
      done();
    })
  })
  it("should detect an italian phrase", function(done) {
    var dT = require('../lib/detectlanguage');
    var detect = new dT({token: "demo"});
    detect.detect("ciao come stai?", function(err, data) {
      data.detections[0].language.should.equal("it");
      done();
    })
  })
  it("should detect a spanish phrase", function(done) {
    var dT = require('../lib/detectlanguage');
    var detect = new dT({token: "demo"});
    detect.detect("hola que tal?", function(err, data) {
      data.detections[0].language.should.equal("es");
      done();
    })
  })
  it("returns error if token is invalid", function(done) {
    var dT = require('../lib/detectlanguage');
    var detect = new dT({token: "assfdfs"});
    detect.detect("hola que tal?", function(err, data) {
      err.message.should.equal("Invalid API key")
      done();
    })
  })

});
