# lsr-wrapper
## NodeJS wrapper for the live-stream-radio api
lsr-wrapper is a promise-based wrapper for the [live-stream-radio](https://github.com/torch2424/live-stream-radio) project and it's api for external access.


![Github All Releases](https://img.shields.io/github/downloads/lsremote/lsr-wrapper/total.svg?style=flat-square) ![GitHub](https://img.shields.io/github/license/lsremote/lsr-wrapper.svg?style=flat-square) [![npm](https://img.shields.io/npm/v/lsr-wrapper.svg?style=flat-square)](https://npmjs.com/package/lsr-wrapper)


## Installing
Using npm:
```
$ npm install lsr-wrapper
```

## Example
### Stream History
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("127.0.0.1", "8000", "super-secret-api-key");

myRadio.getStreamHistory().then(function(data) {
  console.log(data);
});
```

### Stream Start
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamStart().then(function(data) {
  console.log(data);
});
```

### Stream Stop
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamStop().then(function(data) {
  console.log(data);
});
```

### Stream Restart
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamRestart().then(function(data) {
  console.log(data);
});
```

### Get Library
**Video Support Coming Soon!**
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("127.0.0.1", "8000", "super-secret-api-key");

myRadio.getLibrary("audio").then(function(data) {
  console.log(data);
});
```

### Config
**Coming Soon!**

## Versioning
This project will always version itself after the `live-stream-radio` version so the same version will always be compatible with each other.

## Credits
* Axios for their wonderful module
* torch2424 for his awesome live-stream-radio project

## License
Apache 2.0
