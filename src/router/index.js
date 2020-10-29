import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Gallery from "../views/Gallery.vue";
/* import pricing from "../views/pricing.vue"
 */
import beauty from "../views/beauty.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
 /*  {
    path: "/pricing",
    name: "pricing",
    component: pricing,
  }, */
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
    children: [
      {
        path: "/Gallery/all",
        name: "all",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/all.vue"),
      },
      {
        path: "/Gallery/fashion",
        name: "fashion",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/fashion.vue"),
      },
      {
        path: "/Gallery/beauty",
        name:"beauty",
        component: beauty
      },
      {
        path: "/Gallery/potrait",
        name:"potrait",

        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/potrait.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
