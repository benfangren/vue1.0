import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
	showFooter: true,
	changeNum: 0
}
const getters = {
	isShow(state) {
		return state.showFooter
	},
	getchagneNum(state) {
		return state.changeNum
	}
}
const mutations = {
		show(state) {
			state.showFooter = true;
		},
		hide(state) {
			state.showFooter = false;
		},
		newNum(state, sum) {
			state.changeNum += sum;

		}
	},
	const actions = {
		hideFooter(context) {
			context.commit("hide")
		},
		showFooter(context) {
			context.commit("show")
		},
		getnewNum(context, num) {
			context.commit('newNum', num)
		}
	}
const store = new Vuex.store({
	state,
	getters,
	mutations,
	actions,
});
export default store