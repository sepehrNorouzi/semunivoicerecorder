import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userId: null,
		userLevel: 0,
    username: null,
    universityId: null
	},
	mutations: {

    initialzieStore(state) {
      const userId = localStorage.getItem('semnanUserId')
      if(userId) {
        state.userId = userId;
        state.level =  localStorage.getItem('semnanUserLevel')
        state.username =  localStorage.getItem('semnanUsername')
        state.universityId =  localStorage.getItem('semnanUniversityId')
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
    setUsername(state, name) {
			state.username = name;
		},
    setUniversityId(state, id) {
			state.universityId = id;
		},

    logout(state) {
      state.userId = null;
      state.userLevel = 0;
      state.username = null;
      state.universityId = 0;
    }
	},
	actions: {

    setUserId({ commit }, id) {
      commit('setUserId', id);
    },

    setUserLevel({ commit }, level) {
      commit('setUserLevel', level);
    },

    setUsername({ commit }, name) {
      commit('setUsername', name);
    },

    setUniversityId({ commit }, id) {
      commit('setUniversityId', id);
    },

    initialzieStore({ commit }) {
      commit('initialzieStore');
    },
    
    logout({ commit }) {
      commit('logout');
    },
    
  },
});
