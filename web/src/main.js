import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

import { longClickDirective } from "vue-long-click";

const longClickInstance = longClickDirective({ delay: 400, interval: 50 });

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.directive("longclick", longClickInstance);

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
