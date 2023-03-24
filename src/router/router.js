import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import ConctactPage from "../views/ContactPage.vue";
import detailedContactPage from "../views/DetailedContactPage.vue";
import managementPage from "../views/ManagementPage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/contacts",
      name: "Contacts",
      component: ConctactPage,
    },
    {
      path: "/contacts/:id",
      name: "ContactDetails",
      component: detailedContactPage,
    },
    {
      path: "/management/:type",
      name: "Management",
      component: managementPage,
    },
  ],
});

export default router;
