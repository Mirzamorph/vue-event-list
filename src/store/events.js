import EventService from '@/services'

const initialState = {
  events: [],
  categories: ['programming', 'chilling', 'whatever', 'virus'],
  loading: false,
  error: null
}

export default {
  namespaced: true,
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
    fetchEvents({ commit }, { page, perPage }) {
      commit('FETCH_EVENTS_REQUEST')
      return EventService.getEvents(page, perPage)
        .then(({ data, headers }) => {
          commit('FETCH_EVENTS_SUCCESS', data)
          return { data, headers }
        })
        .catch(error => {
          commit('FETCH_EVENTS_FAILURE', error.toString())
        })
    },
    getEvent({ state, commit }, id) {
      const event = state.events.find(event => event.id === id)
      if (event) {
        return new Promise(resolve => {
          resolve(event)
        })
      }
      return EventService.getEvent(id)
        .then(response => {
          return response.data
        })
        .catch(error => {
          commit('FETCH_EVENTS_FAILURE', error.toString())
        })
    },
    createEvent({ commit }, newEvent) {
      return EventService.postEvent(newEvent)
        .then(({ data }) => {
          commit('ADD_EVENT', data)
          return data
        })
        .catch(error => {
          commit('FETCH_EVENTS_FAILURE', error.toString())
        })
    }
  }
}
