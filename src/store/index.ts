import { createStore } from 'vuex'

export default createStore({
  state: {
    vuexA:'123456'
  },
  mutations: {
    setVuexA(state,str){
      state.vuexA = str;
    }
  },
  actions: {
    timeOut(state,str){
      setTimeout(() => {
        state.commit('setVuexA',str)
      }, 1000);
    }
  },
  modules: {
  }
})
