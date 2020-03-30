import axios from 'axios'

const apiClient = axios.create({
  baseURL: '  http://localhost:3000',
  withCredentials: false,
  header: {
    Accept: 'aplication/json',
    'Content-Type': 'aplication/json'
  },
  timeout: 10000
})

export default {
  getEvents(page = 1, limit = 3) {
    return apiClient.get(`/events?_page=${page}&_limit=${limit}`)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}