import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import fashion from '../views/Gallery/fashion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')  },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,children:[
        {path:'/Gallery/all ',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Gallery/all.vue')
      },
      {path:'/Gallery/fashion ',
      component:fashion
    }

      ]  },

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
