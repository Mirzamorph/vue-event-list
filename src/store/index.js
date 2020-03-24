import Vue from 'vue'
import Vuex from 'vuex'
import event from './events'
import notification from './notifications'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    event,
    notification
  }
})
