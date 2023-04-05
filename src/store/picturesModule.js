import {goods} from "@/constants/goods";

export default {
  state: {
    search: '',
    goods: goods,
  },
  mutations: {
    changeSearch(state, payload) {
      state.search = payload
    },
    changeStatus(state, payload) {
      state.goods = state.goods.map(el => el.title === payload.title ? {...el, status: payload.status} : el)
    }
  },
  getters: {
    getGoods(state) {
      return state.goods.filter(el => el.title.toLowerCase().startsWith(state.search.toLowerCase()))
    },
  },
}