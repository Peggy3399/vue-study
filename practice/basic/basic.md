# Vue-baisc

> 介绍

Vue.js 是一个提供 MVVM(Model View ViewModel) 风格的双向数据绑定的 Javascript 库，专注于View 层。它的核心是 MVVM 中的 VM，也就是 ViewModel。ViewModel负责连接 View 和 Model，保证视图和数据的一致，这种轻量级的架构让前端开发更加高效、便捷。

vue.js特点就是（1） 简洁 （2） 轻量 （3）快速 （4） 数据驱动 （5）双向绑定（6） 模块友好 （7） 组件化。

> 搭建一个webpack + vue项目

*  npm install -g vue-cli  ==>快速生成项目模版的工具
*  vue init webpack my-project ==>基于webpack的项目
*  cd my-project
*  npm install 安装需要的依赖
*  npm run dev

> 构造器

创建vue实例：

    var vm = new Vue({
      // 选项
    })

##基本用法

> 文本

  数据绑定最基础的形式是文本插值，使用 “Mustache” 语法（双大括号）。

    <span>Message: {{ msg }}</span>
  
  只执行一次插值v-once：

    <span v-once>This will never change: {{ msg }}</span>

> 原始HTML
  
  双大括号会将数据解释为纯文本，如果要输出真正的 HTML ，就需要使用 v-html 指令：

    <div v-html="rawHtml"></div>

> 指令和属性
  
  指令 (Directives) 是特殊的带有前缀 v- 的特性。指令的值限定为绑定表达式，指令的职责就是当其表达式的值改变时把某些特殊的行为应用到 DOM 上。
  有些指令可以在其名称后面带一个“参数” (Argument)，中间放一个冒号隔开。
  
(1)v-bind 指令用于绑定html特性：

      <a v-bind:href="url"></a>
      <a :href="url"></a><!-- 缩写 -->

由此绑定class有两种写法：
v-bind:class和class="{{ className }}"，但是不推荐混合使用。两者只能选其一！
  
(2)v-on 指令，它用于监听 DOM 事件：

    <a v-on:click="doSomething">
    <a \@click="doSomething"></a><!-- 缩写 -->

(3) 便捷的修饰符（事件处理器详细说明）。

    <!-- v-on 指令触发事件时调用 event.preventDefault() -->
    <form v-on:submit.prevent="onSubmit"></form>

    <!-- 只在按下回车键的时候触发事件 -->
    <input \@keyup.enter="submit">

## 计算属性

    var vm = new Vue({
      el: '#demo',
      data: {
        firstName: 'Foo',
        lastName: 'Bar'
      },
      computed: {
        fullName: function () {
          return this.firstName + ' ' + this.lastName
        }
      }
    })//Foo Bar

  计算属性默认只是 getter，不过在需要时你也可以提供一个 setter

##条件渲染
> v-if
  
v-if 是一个指令，需要将它添加到一个元素上。如果想要切换多个元素，此时可以把一个 `<template>` 元素当做包装元素，并在上面使用 v-if，最终的渲染结果不会包含它。通过控制dom结构的添加与删除控制显示和隐藏。

    <template v-if="ok">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>

> v-show 
  
  v-show的元素会始终渲染并保持在 DOM 中。v-show 是简单的切换元素的 CSS 属性 display。
  注意 v-show 不支持 `<template>` 语法。

  v-show 用在组件上时，因为指令的优先级 v-else 会出现问题。另一个 v-show 替换 v-else。

    <custom-component v-show="condition"></custom-component>
    <p v-show="!condition">这可能也是一个组件</p>

> v-else 
 
元素必须立即跟在 v-if 或 v-show 元素的后面——否则它不能被识别。

##列表渲染
  
v-for 指令基于一个数组渲染一个列表。形式为 item in items，items 是数据数组，item 是当前数组元素的别名。

    <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
    </ul>

    var example1 = new Vue({
      el: '#example-1',
      data: {
        items: [
          {message: 'foo' },
          {message: 'Bar' }
        ]
      }
    })
  
这个只是最基本的用法，v-for还有多种用法，可以看文档的列表循环有详细介绍。

##事件处理器

前面提到了监听事件，vue还有

> 方法事件处理器(就是添加自定义方法来调用)：

    <div id="example-2">
      <!-- 'greet' 是在methods中定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>
  
> 内联处理器：

    <div id="example-3">
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>

    new Vue({
      el: '#example-3',
      methods: {
        say: function (message) {
          alert(message)
        }
      }
    })
  
其实看上去只不顾就是传递了参数。
  
> 修饰符
  
修饰符可以分为事件修饰符和按键修饰符,后面表单控件也有修饰符：
  
(1)事件修饰符：

* .stop 
* .prevent 
* .capture 
* .self

用法：

    <!-- 阻止单击事件冒泡 -->
    <a v-on:click.stop="doThis"></a>
    <!-- 提交事件不再重载页面 -->
    <form v-on:submit.prevent="onSubmit"></form>
    <!-- 修饰符可以串联  -->
    <a v-on:click.stop.prevent="doThat"></a>
    <!-- 只有修饰符 -->
    <form v-on:submit.prevent></form>
    <!-- 添加事件侦听器时使用时间捕获模式 -->
    <div v-on:click.capture="doThis">...</div>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
    <div v-on:click.self="doThat">...</div>

(2)按键修饰符：
全部的按键别名：

* enter 
* tab 
* delete(捕获 “删除” 和 “退格” 键)  
* esc 
* space 
* up  
* down  
* left  
* right

用法：

    <!-- 只有在 keyCode 是 13 时调用 vm.submit() -->
    <input \@keyup.enter="submit">
  
##表单控件绑定
可以用 v-model 指令在表单控件元素上创建双向数据绑定。负责监听用户的输入事件以更新数据,根据控件类型它自动选取正确的方法更新元素.

    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>

类似与多个勾选框这种情况的(复选框等)，就需要绑定到同一个数组。(vue1.html)

> 表单控件修饰符
 
* .lazy
* .number 自动将用户的输入值转为 Number 类型（如果原值的转换结果为 NaN 则返回原值）
* .trim 自动过滤用户输入的首尾空格

用法：

    <!-- 在 "change" 而不是 "input" 事件中更新 -->
    <input v-model.lazy="msg" >
  
[vue.js2.0](https://vuefe.cn)
