const axios = require('axios');
const qs = require('querystring');

class liveStreamRadio {
  constructor(ip, port, apiKey) {
    this.ip = ip;
    this.port = port;
    this.apiKey = apiKey;
  }

  // /stream/history
  async getStreamHistory() {
    var apiPath = "http://" + this.ip + ":" + this.port + "/stream/history";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data.history;
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  }

  // /stream/start
  async streamStart() {
    var apiPath = "http://" + this.ip + ":" + this.port + "/stream/start";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };
    var data = {};

    return axios.post(apiPath, data, options)
    .then(function(response) {
      if(response.data.message == "OK") {
        return true;
      } else {
        return response.data.message;
      }
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  }

  // /stream/stop
  async streamStop() {
    var apiPath = "http://" + this.ip + ":" + this.port + "/stream/stop";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };
    var data = {};

    return axios.post(apiPath, data, options)
    .then(function(response) {
      if(response.data.message == "OK") {
        return true;
      } else {
        return response.data.message;
      }
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  }

  // /stream/restart
  async streamRestart() {
    var apiPath = "http://" + this.ip + ":" + this.port + "/stream/restart";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };
    var data = {};

    return axios.post(apiPath, data, options)
    .then(function(response) {
      if(response.data.message == "OK") {
        return true;
      } else {
        return response.data.message;
      }
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  }

  // /config (getFullConfig)
  /* async getConfigAll() {
    var apiPath = "http://" + this.ip + ":" + this.port + "/config";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  } */

  // /config (getConfigKey)
  /* async getConfigByKey(configKey) {
    var apiPath = "http://" + this.ip + ":" + this.port + "/config";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    var data = qs.stringify({ key: configKey });

    return axios.get(apiPath, data, options)
    .then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  } */

  // /config (setConfigKey)

  // /library/audio
  async getLibrary(mode = "audio") {
    var apiPath = "http://" + this.ip + ":" + this.port + "/library/" + mode;
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data.audio;
    }).catch(function(error) {
      if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
    });
  }
}

module.exports = liveStreamRadio;
