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
    UpdateName (state, payload) {
      console.log(payload)
      if (payload) {
        console.log(111)
        state.AnimationName = 'Side-fead-right'
      } else {
        state.AnimationName = 'Side-fead'
      }
    }
  },
  actions: {
  },
  getters
})
export default Store
