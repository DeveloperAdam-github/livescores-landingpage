import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    darkMode: true,
  },
  mutations: {
    darkmode_true(state) {
      state.darkMode = true;
    },
    darkmode_false(state) {
      state.darkMode = false;
    },
  },
  actions: {
    toggleDarkModeTrue({ commit }) {
      commit('darkmode_true');
    },
    toggleDarkModeFalse({ commit }) {
      commit('darkmode_false');
    },
  },
  getters: {
    darkModeOn(state) {
      return state.darkMode;
    },
  },
});
