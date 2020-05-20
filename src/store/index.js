import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore () {
  return new Vuex.Store({
    state: {
      theme: 'light' // light | theme
    },
    mutations: {
      toggleTheme (state) {
        state.theme = state.theme === 'light' ? 'dark' : 'light'
      }
    },
    actions: {
    },
    modules: {
    }
  })
}
