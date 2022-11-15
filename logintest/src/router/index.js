import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../components/Detail/Details.vue')
  },
  {
    path: '/actordetails/:id',
    name: 'ActorDetails',
    component: () => import('../components/Detail/ActorDetails.vue')
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../components/User/SignUp.vue')
  },
  {
    path: '/login',
    name: 'SignIn',
    component: () => import('../components/User/SignIn.vue')
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: () => import('../components/User/UserProfile.vue')
  },
  {
    path: '/admincreate',
    name: 'AdminCreate',
    component: () => import('../components/Admin/Movie/AdminCreate.vue')
  },
  {
    path: '/adminupdate',
    name: 'AdminUpdate',
    component: () => import('../components/Admin/Movie/AdminUpdate.vue')
  },
  {
    path: '/admindelete',
    name: 'AdminDelete',
    component: () => import('../components/Admin/Movie/AdminDelete.vue')
  },
  {
    path: '/actorcreate',
    name: 'ActorCreate',
    component: () => import('../components/Admin/Actor/ActorCreate.vue')
  },
  {
    path: '/actorupdate',
    name: 'ActorUpdate',
    component: () => import('../components/Admin/Actor/ActorUpdate.vue')
  },
  {
    path: '/actordelete',
    name: 'ActorDelete',
    component: () => import('../components/Admin/Actor/ActorDelete.vue')
  },
  {
    path: '/actiondisplay',
    name: 'ActionDisplay',
    component: () => import('../components/Detail/ActionDisplay.vue')
  },
  {
    path: '/fictiondisplay',
    name: 'FictionDisplay',
    component: () => import('../components/Detail/FictionDisplay.vue')
  },
  {
    path: '/populardisplay',
    name: 'PopularDisplay',
    component: () => import('../components/Detail/PopularDisplay.vue')
  },
  {
    path: '/search',
    name: 'MovieSearch',
    component: () => import('../components/Detail/MovieSearch.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../components/Admin/Admin.vue')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../components/User/Logout.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
