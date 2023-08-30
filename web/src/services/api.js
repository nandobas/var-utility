import axios from "axios";

const instance = axios.create();

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For example, you can modify headers or add tokens
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("ERROR:", error.message);
    //return Promise.reject(error);
    return;
  }
);

// Response Interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with successful response
    return response;
  },
  function (error) {
    if (error.response != undefined)
      switch (parseInt(error.response.status)) {
        case 401:
          break;
        case 404:
          console.log(
            "URL inexistente, entrar em contato com o desenvolvimento.",
            "error"
          );
          break;
        case 408:
          console.log(
            "Erro ao acessar a API, entrar em contato com o desenvolvimento!"
          );
          break;
        case 500:
          console.log(
            "Erro ao acessar a API, entrar em contato com o desenvolvimento!"
          );
          break;
        default:
          return Promise.reject(error);
      }
  }
);

export default {
  ipv4: "127.0.0.1",
  ipv4Port: "8088",

  loadAddress: function () {
    let ipv4Info = localStorage.getItem("serverIpv4Address");
    if (ipv4Info) {
      this.ipv4 = ipv4Info;
    }
    let ipv4PortInfo = localStorage.getItem("serverIpv4Port");
    if (ipv4PortInfo) {
      this.ipv4Port = ipv4PortInfo;
    }
    return "http://" + this.ipv4 + ":" + this.ipv4Port;
  },

  Exec: function (func, input = "", value = "") {
    let parameters = "";
    if (input != "") {
      parameters = parameters + "&Input=" + input;
    }
    if (value != "") {
      parameters = parameters + "&Value=" + value;
    }
    return this.get("/?Function=" + func + parameters);
  },

  get: function (url, config) {
    let address = this.loadAddress();
    return instance
      .get(address + url, config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error.message);
      });
  },
  post: function (url, data, config) {
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    let address = this.loadAddress();
    return instance.post(address + url, data, config).then((response) => {
      return response;
    });
  },
};
