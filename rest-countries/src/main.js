import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
