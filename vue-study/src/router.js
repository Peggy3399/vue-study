import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
//导入组件
import Basic from './components/Basic.vue';
import Advanced from './components/Advanced.vue';
import Home from './components/Home.vue';
import Test from './components/Test.vue';

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition;
  } else {
    const position = {};
    if (to.hash) {
      position.selector = to.hash;
    }else {
      position.x = 0;
      position.y = 0;
    }
    return position;
  }
}
//创建router实例，传送路由配置
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    scrollBehavior,
    routes: [
        {path: '/', components: {
            default: Home,
            test: Test
        }, meta: { scrollToTop: true }},
        {name: 'basic', path: '/basic', component: Basic,
         children: [
            {
              path: '',
              component: Home
            },
            {
              path: 'test1',
              component: Test
            }]
        },
        {path: '/advanced', component: Advanced,redirect: { name: 'basic' }},
        /*redirect: { name: 'basic' }*///重定向
        {path: '/b', alias: '/basic', component: Basic}//别名
    ]
});

export default router;