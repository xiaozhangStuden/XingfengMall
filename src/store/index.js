import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    // 全局的 状态
    AnimationName: 'Side-fead'
  },
  mutations: {
  },
  actions: {
  },
  getters
})
export default Store
