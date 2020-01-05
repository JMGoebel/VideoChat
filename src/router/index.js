import Vue from "vue";
import firebase from "firebase";
import VueRouter from "vue-router";

// Views
import About from "@/views/About.vue";
import Dashboard from "@/views/Dashboard.vue";
import Landing from "@/views/Landing.vue";
import SignUp from "@/views/SignUp.vue"; // Revome and turn into component

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/landing"
  },
  {
    path: "/landing",
    name: "landing",
    component: Landing
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/sign-up",
    name: "sign_up",
    component: SignUp
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("dashboard");
  else next();
});

export default router;
