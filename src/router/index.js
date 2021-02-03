import { createRouter, createWebHashHistory } from "vue-router";


const routes = [

  {
    path: "/",
    name: "Login",
    component: () =>
      import("../views/account/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/Register.vue"),
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("../views/account/Forget.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
