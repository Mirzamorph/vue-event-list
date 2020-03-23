import Vue from 'vue'
import Vuex from 'vuex'
import event from './events'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    event
  }
})
