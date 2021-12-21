import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userId: null,
		userLevel: 0,
	},
	mutations: {

    initialzieStore(state) {
      const userId = localStorage.getItem('semnanUserId')
      if(userId) {
        state.userId = userId;
        state.level =  localStorage.getItem('semnanUserLevel')
      }
      else {
        state.userId =  null;
        state.userLevel = 0;
      }
    },

		setUserId(state, id) {
			state.userId = id;
		},
		setUserLevel(state, level) {
			state.userLevel = level;
		},
	},
	actions: {

    setUserId({ commit }, id) {
      commit('setUserId', id);
    },

    setUserLevel({ commit }, level) {
      commit('setUserLevel', level);
    },

    initialzieStore({ commit }) {
      commit('initialzieStore');
    }

  },
});
