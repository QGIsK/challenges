import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home.vue";
import Country from "../components/Country.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/:country_id",
      name: "Country",
      component: Country
    }
  ]
});

export default router;
