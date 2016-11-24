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
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash;
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0;
      position.y = 0;
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
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
        {name: 'basic', path: '/basic', component: Basic, meta: { scrollToTop: true },
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
        {path: '/advanced', component: Advanced, meta: { scrollToTop: true }},
        /*redirect: { name: 'basic' }*///重定向
        {path: '/b', alias: '/advanced', component: Advanced}//别名
    ]
});

export default router;