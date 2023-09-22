import { createStore } from 'vuex'
import auth from './auth'

export default createStore({
  state: {
    error: null
  },
  getters: {
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth
  }
})
