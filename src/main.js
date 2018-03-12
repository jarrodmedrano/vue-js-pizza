import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import App from "./App.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Delivery from "./components/Delivery";
import History from "./components/History";
import Ordering from "./components/Ordering";
import Admin from "./components/Admin";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/menu",
    component: Menu
  },
  {
    path: "/about",
    component: About,
    children: [
      { path: "/contact", component: Contact },
      { path: "/history", component: History },
      { path: "/delivery", component: Delivery },
      { path: "/ordering", component: Ordering }
    ]
  },
  {
    path: "*",
    redirect: "/"
  },
  { path: "/admin", components: Admin }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
