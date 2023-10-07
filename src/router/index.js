import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HeadView from '../components/HeadView.vue'
import cardView from '../components/cardView.vue'

import WeartherView from '../components/WeartherView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: HomeView
    },
    {
      path: '/HeadView',
      name: 'HeadView',
      component: HeadView
    },
    {
      path: '/cardView',
      name: 'cardView',
      component: cardView
    }
    ,
    {
      path: '/WeatherView',
      name: 'WeartherView',
      component: WeartherView
    }
  ]
})

export default router
