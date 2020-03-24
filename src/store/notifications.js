export default {
  namespaced: true,
  state: {
    notifications: []
  },
  mutations: {
    ADD(state, { type, message }) {
      const id = +Date.now()
        .toString()
        .substr(2, 9)
      state.notifications.push({
        id,
        type,
        message
      })
    },
    REMOVE(state, { id }) {
      state.notifications = state.notifications.filter(notification => {
        return notification.id !== id
      })
    }
  },
  actions: {
    add({ commit }, notification) {
      commit('ADD', notification)
    },
    remove({ commit }, notification) {
      commit('REMOVE', notification)
    }
  }
}
