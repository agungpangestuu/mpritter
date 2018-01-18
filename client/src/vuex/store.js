import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let http = axios.create({
  baseURL: 'http://localhost:3006',
  headers: { token: localStorage.getItem('token') }
})

let state = {
  isLogin: false,
  mailHasError: false,
  timeline: []
}

let mutations = {
  setLogin (state, payload) {
    state.islogin = payload
  },
  setLogout (state, payload) {
    state.isLogin = payload
    window.location.reload()
  },
  setTimeline (state, payload) {
    state.timeline = payload
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
  },
  signin ({commit}, data) {
    http.post('/api/user/signin', data)
      .then(result => {
        console.log(result.data)
        localStorage.setItem('token', result.data.token)
        commit('setLogin', true)
      })
      .catch(err => {
        console.log(err)
        alert('Data Yang anda masukan tidak cocok dengan acount mana pun !!')
      })
  },
  signup ({commit}, data) {
    http.post('/api/user', data)
      .then(result => {
        console.log(result.data)
        // commit('setLogin', true)
      })
      .catch(err => {
        console.log(err)
        alert('Data Yang anda masukan tidak cocok dengan acount mana pun !!')
      })
  },
  postProfile ({commit}, data) {
    http.post('/api/profile', data)
      .then(result => {
        console.log(result.data)
        // commit('setLogin', true)
      })
      .catch(err => {
        console.log(err)
        alert('Data Yang anda masukan tidak cocok dengan acount mana pun !!')
      })
  },
  getTimeLine ({commit}) {
    http.get('/api/tweet')
      .then(({data}) => {
        console.log(data)
        commit('setTimeline', data.data)
      })
      .catch(err => {
        console.log(err)
        alert('error')
      })
  }

}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
