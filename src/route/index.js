import Vue from 'vue';
import VueRouter from 'vue-router';
import Biaodan from '../pages/biaodan'
import Home from '../pages/home'
import List from '../pages/list'
import Page from '../pages/page'
import Mytitle from '../pages/mytitle'
import Qqq from '../pages/qqq'
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
		{
			path: '/mytitle',
			component:Mytitle,
		},
			{
			path: '/qqq',
			component:Qqq,
		}
	]
});
export default router;