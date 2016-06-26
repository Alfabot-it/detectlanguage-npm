# detectlanguage.com unofficial node js client

[![Build Status](https://travis-ci.org/shylesh107/9gag-scraper.svg?branch=master)](https://travis-ci.org/shylesh107/9gag-scraper)

## Installation

npm install detectlanguage --save

## Usage

```js
var DetectLanguage = require('detectlanguage')
var detectL = new DetectLanguage({token: "YOUR-API-KEY-HERE"});
detectL.detect("YOUR TEXT HERE", function(err, data) {
  //The result will be here in the data object
  //example:
  // { detections: [ { language: 'es', isReliable: false, confidence: 0.01 } ] }
})
```

## Tests

npm test
