# Vue-advanced

Vue提供多种不同的过渡效果 。

* 在 CSS 过渡和动画中自动应用 class
* 可以配合使用第三方 CSS 动画库，如 Animate.css
* 在过渡钩子函数中使用 JavaScript 直接操作 DOM
* 可以配合使用第三方 JavaScript 动画库，如 Velocity.js

> 安装：

    npm install vue-transition

##CSS过渡

> 单元素/组件的过渡

Vue 提供了 transition 的封装组件，所以我们在一下情景中都可以使用过渡。

* 条件渲染 （使用 v-if）
* 条件展示 （使用 v-show）
* 动态组件
* 组件根节点

>例如：

    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    new Vue({
      el: '#demo',
      data: {
        show: true
      }
    })

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }

> 过渡的CSS-类名

会有 4 个(CSS)类名在 enter/leave 的过渡中切换：

* v-enter: 定义进入过渡的开始状态。在元素被插入时生效，在下一个帧移除。
* v-enter-active: 定义进入过渡的结束状态。在元素被插入时生效，在 transition/animation 完成之后移除。
* v-leave: 定义离开过渡的开始状态。在离开过渡被触发时生效，在下一个帧移除。
* v-leave-active: 定义离开过渡的结束状态。在离开过渡被触发时生效，在 transition/animation 完成之后移除。

![](file:///C:/Users/Administrator/Desktop/study/Vue/practice/basic/images/transition.png)

##CSS动画

CSS动画是在animationend 事件触发时删除。

    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Look at me!</p>
      </transition>
    </div>

    new Vue({
      el: '#example-2',
      data: {
        show: true
      }
    })

    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-out .5s;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
