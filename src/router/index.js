import Vue from 'vue'
import VueRouter from 'vue-router'
import EventList from '@/views/EventList'
import EventCreate from '@/views/EventCreate'
import EventShow from '@/views/EventShow'
import NotFound from '@/components/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/event/:id',
    name: 'event-show',
    component: EventShow,
    props: true
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
