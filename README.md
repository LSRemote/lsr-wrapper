# lsr-wrapper
![Github All Releases](https://img.shields.io/github/downloads/lsremote/lsr-wrapper/total.svg?style=flat-square) ![GitHub](https://img.shields.io/github/license/lsremote/lsr-wrapper.svg?style=flat-square) [![npm](https://img.shields.io/npm/v/lsr-wrapper.svg?style=flat-square)](https://npmjs.com/package/lsr-wrapper)

lsr-wrapper is a promise-based NodeJS wrapper for the [live-stream-radio](https://github.com/torch2424/live-stream-radio) project and it's api for external access.


## Installing
Using npm:
```
$ npm install lsr-wrapper
```

## Example
### Ping API
Useful for checking if the API is running. Returns `true` if the API is reachable and `false` if it is not.

```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.ping().then(function(data) {
  console.log(data);
});
```

### Stream Status
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.getStreamStatus().then(function(data) {
  console.log(data);
});
```

### Stream History
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.getStreamHistory().then(function(data) {
  console.log(data);
});
```

### Stream Start
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamStart().then(function(data) {
  console.log(data);
});
```

### Stream Stop
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamStop().then(function(data) {
  console.log(data);
});
```

### Stream Restart
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.streamRestart().then(function(data) {
  console.log(data);
});
```

### Get Library
**Video Support Coming Soon!**
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.getLibrary("audio").then(function(data) {
  console.log(data);
});
```


### Get full config
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.getConfigAll().then(function(data) {
  console.log(data);
});
```

### Get a config value by key
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.getConfigByKey("interlude.frequency").then(function(data) {
  console.log(data);
});
```

### Set a config value by key
```
var liveStreamRadio = require('lsr-wrapper');
var myRadio = new liveStreamRadio("http", "127.0.0.1", "8000", "super-secret-api-key");

myRadio.setConfigByKey("interlude.frequency", "0.5").then(function(data) {
  console.log(data);
});
```

## Versioning
This project will always version itself after the `live-stream-radio` version so the same version will always be compatible with each other. The patch number can differ if there were changes between live-stream-radio releases (for example 2.2.x is compatible with live-stream-radio 2.2.x)

## Credits
* Axios for their wonderful module
* torch2424 for his awesome live-stream-radio project

## License
Apache 2.0
