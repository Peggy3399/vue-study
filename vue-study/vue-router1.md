# vue-router1

> 安装：

    npm install vue-router --save

vue路由主要就是通过使用 router-link(默认会被渲染成一个 `<a>` 标签) 组件来导航，通过传入 `to` 属性指定链接, 最后渲染在`<router-view>`中，实现SPA。

    <p>
        <router-link to="/foo">Go to Foo</router-link>
    </p>
    <router-view></router-view>

我目前了解的主要是webpack + ES2015实现vue。如果要实现路由，文件基本写法就是：

* 调用 Vue.use(VueRouter)
* 定义路由组件(import导入需要渲染的组件)
* 定义路由
* 创建router实例
* 创建挂载根实例(就是路由最终在页面实现的根元素)

> 基本写法：

    import Vue from 'vue/dist/vue'
    import VueRouter from 'vue-router'

    // 1. Use plugin.
    // This installs <router-view> and <router-link>,
    // and injects $router and $route to all router-enabled child components
    Vue.use(VueRouter)

    // 2. Define route components
    const Home = { template: '<div>home</div>' }
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    // 3. Create the router
    const router = new VueRouter({
      mode: 'history',
      base: __dirname,
      routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
      ]
    })

    // 4. Create and mount root instance.
    // Make sure to inject the router.
    // Route components will be rendered inside <router-view>.
    new Vue({
      router,
      template: `
        <div id="app">
          <h1>Basic</h1>
          <ul>
            <li><router-link to="/">/</router-link></li>
            <li><router-link to="/foo">/foo</router-link></li>
            <li><router-link to="/bar">/bar</router-link></li>
          </ul>
          <router-view class="view"></router-view>
        </div>
      `
    }).$mount('#app')

> mode(模式)选项取值为： (默认是 "hash"):

* "hash" ：hash就是利用#做路由切换
* "history" ：history是利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。（需要后台配置）
* "abstract" ：abstract一样，只不过，history会记录历史位置

> base

应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"。

> linkActiveClass

全局配置 `<router-link>` 的默认『激活 class 类名』

> scrollBehavior 滚动行为

注意: 这个功能只在 HTML5 history 模式下可用。

    const router = new VueRouter({
      routes: [...],
      scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
      }
    })

例子1：对于所有路由导航，简单地让页面滚动到顶部。

    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }

例子2：返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：

    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

例子3：模拟『滚动到锚点』的行为：

    scrollBehavior (to, from, savedPosition) {
        if (to.hash) {
            return {
              selector: to.hash
            }
        }
    }

[一个完整例子](https://github.com/vuejs/vue-router/blob/next/examples/scroll-behavior/app.js)

## router-link

`<router-link> `还有以下属性参数：

* to: 表示目标路由的链接。当被点击后，内部会立刻把 to 的值传到 router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。
* tag: 渲染为的 html 元素类型，默认是`<a>`.
* exact: 用于控制当前激活项的匹配行为。 
举个例子，如果当前的路径是 /a 开头的，那么` <router-link to="/a">` 也会被设置 CSS 类名。
* append: 设置 append 属性后，则在当前（相对）路径前添加基路径。例如，我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b。
* replace: 设置 replace 属性的话，当点击时，会调用 router.replace() 而不是 router.push()，于是导航后不会留下 history 记录。
* active-class: 当链接项激活时增加的 CSS 样式，默认值: "router-link-active"。

> 用`<router-link>`可以渲染外层元素，包裹着内层的原生 `<a>` 标签。

## router-view

就是组件被渲染时要填的坑。

> 路由嵌套

如果使用路由的嵌套，组件包含自己的嵌套 `<router-view>`就可以。
    
    const User = {
      template: `
        <div class="user">
          <h2>User {{ $route.params.id }}</h2>
          <router-view></router-view>
        </div>
      `
    }

这时就需要在路由路径配置当中，写上children，然后进行组件自己的路由，children 配置就是像 routes 配置一样的路由配置数组。

    const router = new VueRouter({
      routes: [
        { path: '/user/:id', component: User,
          children: [
            {
              // 当 /user/:id/profile 匹配成功，
              // UserProfile 会被渲染在 User 的 <router-view> 中
              path: 'profile',
              component: UserProfile
            },
            {
              // 当 /user/:id/posts 匹配成功
              // UserPosts 会被渲染在 User 的 <router-view> 中
              path: 'posts',
              component: UserPosts
            }
          ]
        }
      ]
    })

> 命名视图

想同时（同级）展示多个视图，而不是嵌套展示,这时可以设置多个出口，也就是`<router-view >`，如果 `<router-view >` 没有设置名字，那么默认为 default。

    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view

    const router = new VueRouter({
      routes: [
        {
          path: '/',
          components: {
            default: Foo,
            a: Bar,
            b: Baz
          }
        }
      ]
    })

## router的重定向和别名

> 重定向

重定向我的理解就是重新定方向，本来路由要走的/a这个路由，由于重定向就会改变为/b。
写法： 
  
    { path: '/a', redirect: '/b' }
也可以是有name的路由：

    { path: '/a', redirect: { name: 'foo' }}
甚至是一个方法，动态返回重定向目标：

    const router = new VueRouter({
      routes: [
        { path: '/a', redirect: to => {
          // 方法接收 目标路由 作为参数
          // return 重定向的 字符串路径/路径对象
        }}
      ]
    })

[一个好的例子](https://github.com/vuejs/vue-router/blob/next/examples/redirect/app.js)

> 别名 

别名就类似于我们的小名，/a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

写法：

    { path: '/a', component: A, alias: '/b' }



