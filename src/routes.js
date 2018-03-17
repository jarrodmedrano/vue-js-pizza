import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Delivery from "./components/Delivery";
import History from "./components/History";
import Ordering from "./components/Ordering";
import Admin from "./components/Admin";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";

export const routes = [
  {
    path: "/",
    name: "homeLink",
    components: {
      default: Home,
      ordering: Ordering,
      delivery: Delivery,
      history: History
    }
  },
  {
    path: "/menu",
    component: Menu,
    name: "menuLink"
  },
  {
    path: "/admin",
    component: Admin,
    name: "adminLink",
    beforeEnter: (to, from, next) => {
      alert("This area is for authorised users only, please login to continue");
      next();
    }
  },
  {
    path: "/about",
    name: "aboutLink",
    component: About,
    children: [
      { path: "/contact", component: Contact, name: "contactLink" },
      { path: "/history", component: History, name: "historyLink" },
      { path: "/delivery", component: Delivery, name: "deliveryLink" },
      { path: "/ordering", component: Ordering, name: "orderingLink" }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
