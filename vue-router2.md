# vue-router2

## router实例的属性和方法

> 属性

* router.app: 配置了 router 的 Vue 根实例。
* router.mode: 路由使用的 模式。
* router.currentRoute: 当前路由对应的 路由信息对象.

> 方法

* router.beforeEach(guard)
* router.afterEach(hook)

增加全局的导航钩子。参考 导航钩子.

* router.push(location)
* router.replace(location)
* router.go(n)：这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
* router.back()
* router.forward()

动态的导航到一个新 url。参考 编程式导航.

* router.getMatchedComponents()

返回当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。

## 导航钩子

正如其名，vue-router 提供的导航钩子主要用来拦截导航，让它完成跳转或取消。有多种方式可以在路由导航发生时执行钩子：全局的, 单个路由独享的, 或者组件级的。

> 全局钩子

可以使用 router.beforeEach 注册一个全局的 before 钩子：

    const router = new VueRouter({ ... })
    router.beforeEach((to, from, next) => {
          // ...
    })
当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于 等待中。

## 路由元信息

## 数据获取

## 懒加载

## 路由信息对象