import Vue from 'vue'
import Vuex from 'vuex'
import picturesModule from "@/store/picturesModule"

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('state')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('state')))
        )
      }
    },
  },
  modules: {
    picturesModule
  }
})
