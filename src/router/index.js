import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '@/views/EventList'
import EventCreate from '@/views/EventCreate'
import EventShow from '@/views/EventShow'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: EventList
  },
  {
    path: '/event/:id',
    name: 'EventShow',
    component: EventShow,
    props: true
  },
  {
    path: '/event/create',
    name: 'EventCreate',
    component: EventCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
