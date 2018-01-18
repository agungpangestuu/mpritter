import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let state = {
  isLogin: false
}

let mutations = {
  setLogin (state, payload) {
    state.islogin = payload
  }
  setLogout (state, payload) {
    state.isLogin = payload
    window.location.reload()
  }
}

let actions = {
  checkLogin ({commit}) {
    if (localStorage.getItem('token')) {
      commit('setLogin', true)
    }
    else {
      commit('setLogin', false)
    }
  },
  logout ({commit}) {
    localStorage.clear()
    commit('setLogout', false)
    // window.location.reload()
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
