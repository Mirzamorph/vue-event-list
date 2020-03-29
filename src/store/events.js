import EventService from '@/services'

const initialState = {
  events: [],
  categories: ['programming', 'chilling', 'whatever', 'virus']
}

const notice = (type, message, dispatch) => {
  const notification = { type, message }
  dispatch('notification/add', notification, { root: true })
}

export default {
  namespaced: true,
  state: initialState,
  mutations: {
    FETCH_EVENT({ events }, newEvent) {
      events.push(newEvent)
    },
    FETCH_EVENTS(state, events) {
      state.events = events
    }
  },
  actions: {
    fetchEvents({ commit, dispatch }, { page, perPage }) {
      return EventService.getEvents(page, perPage)
        .then(({ data, headers }) => {
          commit('FETCH_EVENTS', data)
          return { data, headers }
        })
        .catch(error => {
          notice('error', error.message, dispatch)
        })
    },
    getEvent({ state, dispatch }, id) {
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
          notice('error', error.message, dispatch)
        })
    },
    createEvent({ commit, dispatch }, newEvent) {
      return EventService.postEvent(newEvent)
        .then(({ data }) => {
          commit('FETCH_EVENT', data)
          const message = 'The event was created successfully!'
          notice('success', message, dispatch)
          return data
        })
        .catch(error => {
          notice('error', error.message, dispatch)
        })
    }
  }
}
