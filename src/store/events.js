import EventService from '@/services'

const initialState = {
  events: [],
  currentEvent: null,
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
    ADD_EVENT({ events }, newEvent) {
      events.push(newEvent)
    },
    FETCH_EVENTS(state, events) {
      state.events = events
    },
    FETCH_EVENT(state, event) {
      state.currentEvent = event
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
    fetchEvent({ state, commit }, id) {
      const event = state.events.find(event => event.id === id)
      if (event) {
        commit('FETCH_EVENT', event)
        return new Promise(resolve => {
          resolve(event)
        })
      }
      return EventService.getEvent(id).then(response => {
        const event = response.data
        commit('FETCH_EVENT', event)
        return event
      })
    },
    createEvent({ commit, dispatch }, newEvent) {
      return EventService.postEvent(newEvent)
        .then(({ data }) => {
          commit('ADD_EVENT', data)
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
