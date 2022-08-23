import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import SearchGoods from './modules/SearchGoods'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    SearchGoods
  },
  getters
})
export default Store
