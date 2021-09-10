import Vue from 'vue';
import VueRouter from 'vue-router';
import Biaodan from '../pages/Biaodan.vue'
import Home from '../pages/Home.vue'
import List from '../pages/List.vue'
import Page from '../pages/Page.vue'
Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Home,
		},
		{
			path: '/biaodan',
			component: Biaodan,
		},
		{
			path: '/list',
			component: List,
		},
		{
			path: '/page',
			component: Page,
		},
	]
});
export default router;