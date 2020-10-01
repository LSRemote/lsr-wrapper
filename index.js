const axios = require('axios');
const qs = require('querystring');

class liveStreamRadio {
  constructor(protocol, ip, port, apiKey) {
    this.protocol = protocol;
    this.ip = ip;
    this.port = port;
    this.apiKey = apiKey;
  }

  // /
  async ping() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      if(response.data.live_stream_radio) {
        return true;
      } else {
        return false;
      }
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /stream
  async getStreamStatus() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/stream";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data;
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /stream/history
  async getStreamHistory() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/stream/history";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data.history;
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /stream/start
  async streamStart() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/stream/start";
    var options = {
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
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
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /stream/stop
  async streamStop() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/stream/stop";
    var options = {
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
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
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /stream/restart
  async streamRestart() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/stream/restart";
    var options = {
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
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
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /config (getFullConfig)
  async getConfigAll() {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/config";
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data.value;
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /config (getConfigKey)
  async getConfigByKey(configKey) {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/config";
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
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /config (setConfig)
  async setConfigByKey(configKey, newValue) {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/config";
    var options = {
      headers: {
        "Authorization": this.apiKey,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    var data = qs.stringify({ key: configKey, value: newValue });

    return axios.post(apiPath, data, options)
    .then(function(response) {
      return response.data.response;
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }

  // /config (setConfigKey)

  // /library/audio
  async getLibrary(mode = "audio") {
    var apiPath = this.protocol + "://" + this.ip + ":" + this.port + "/library/" + mode;
    var options = {
      headers: {
        "Authorization": this.apiKey
      }
    };

    return axios.get(apiPath, options)
    .then(function(response) {
      return response.data.audio;
    }).catch(function(error) {
      if(error.response) {
        if(error.response.status == 401) { throw new Error("Api-Key is not correct! (HTTP 401)"); }
      } else {
        throw new Error(error);
      }
    });
  }
}

module.exports = liveStreamRadio;
