
export default {
  namespaced: true,
  state: {
    SearchResutList: []
  },

  mutations: {
    loadSearchList (state, payload) {
      state.SearchResutList = payload
    }
  },

  actions: {

  },

  getters: {},
  modules: {}
}
