export default {
  namespaced: true,
  state: {
    notifications: []
  },
  mutations: {
    ADD(state, notification) {
      const id = +Date.now()
        .toString()
        .substr(2, 9)
      state.notifications.push({
        ...notification,
        id
      })
    },
    REMOVE(state, { id }) {
      state.notifications = state.notifications.filter(notification => {
        return notification.id !== id
      })
    }
  }
}
