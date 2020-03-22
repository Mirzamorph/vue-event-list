import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services'

Vue.use(Vuex)

const initialState = {
  events: [],
  categories: ['programming', 'chilling', 'whatever', 'virus'],
  loading: false,
  error: null
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    ADD_EVENT({ events }, newEvent) {
      events.push(newEvent)
    },
    FETCH_EVENTS_REQUEST(state) {
      state.loading = true
      state.error = null
    },
    FETCH_EVENTS_SUCCESS(state, events) {
      state.loading = false
      state.error = null
      state.events = events
    },
    FETCH_EVENTS_FAILURE(state, error) {
      state.loading = false
      state.error = error
    }
  },
  actions: {
    fetchEvents({ commit }) {
      commit('FETCH_EVENTS_REQUEST')
      EventService.getEvents()
        .then(({ data }) => {
          commit('FETCH_EVENTS_SUCCESS', data)
        })
        .catch(error => {
          commit('FETCH_EVENTS_FAILURE', error.toString())
        })
    },
    async createEvent({ commit }, newEvent) {
      return EventService.postEvent(newEvent)
        .then(({ data }) => {
          commit('ADD_EVENT', data)
          return data
        })
        .catch(error => {
          commit('FETCH_EVENTS_FAILURE', error.toString())
        })
    }
  },
  modules: {}
})
