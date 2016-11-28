## vue组件

Vue的组件化功能可谓是它的一大亮点，通过将页面上某一组件的html、CSS、js代码放入一个.vue的文件中进行管理可以大大提高代码的维护性。
目前直接使用ES6的模块化功能，再结合Webpack进行相应打包是最热门的方案。

> 基本写法：

    // App.vue
    <template>
        <div class="box" v-text="note"></div>
    </template>

    <script>
    export default {
        data () {
            return {
                note: '这是一个组件的html模板！'
            }
        }
    }
    </script>

    <style>
    .box {
        color: #000;
    }
    </style>
[组件](https://vuefe.cn/guide/components.html)

>  data 必须是函数。

> 全局注册

注册全剧组件可以用 Vue.component(tag, constructor) 。
   
    例如： Vue.component('my-component', {
              // 选项
            })

组件在注册之后，才可以在父实例的模块中以自定义元素 `<my-component>` 的形式使用(组件名最好使用小写，并且包含一个短杠)。

    <div id="example">
      <my-component></my-component>
    </div>
    // 注册
    Vue.component('my-component', {
      template: '<div>A custom component!</div>'
    })
    // 创建根实例
    new Vue({
      el: '#example'
    })

> 局部注册
 
  用实例选项 components 注册局部组件。局部注册只能在对应的Vue实例下使用，所以它不能在其它Vue实例下使用。

    例如：var Child = {
            template: '<div>A custom component!</div>'
          }
          new Vue({
            // ...
            components: {
              // <my-component> 将只在父模板可用
              'my-component': Child
            }
          })

## 传递信息

在 Vue.js 中，父子组件的关系可以总结为 props down, events up 。父组件通过 props 向下传递数据给子组件，子组件通过 events 给父组件发送消息。

> Props

组件实例的作用域是孤立的。这意味着不能并且不应该在子组件的模板内直接引用父组件的数据。可以使用 props 把数据传给子组件。

    Vue.component('child', {
      // 声明 props
      props: ['message'],
      // 就像 data 一样，prop 可以用在模板内
      // 同样也可以在 vm 实例中像 “this.message” 这样使用
      template: '<span>{{ message }}</span>'
    })

props也可以用 v-bind 绑定动态 props 到父组件的数据。每当父组件的数据变化时，也会传导给子组件。
    
    <div>
      <input v-model="parentMsg">
      <br>
      <child :my-message="parentMsg"></child>
    </div>
(2)如果要子组件把数据传递给父组件，就需要自定义事件。

[自定义事件](https://vuefe.cn/guide/components.html#自定义事件)

## 动态组件
 
如果想要动态切换不同的组件，就需要使用动态组件，动态地绑定到它的 is 特性。

    var vm = new Vue({
      el: '#example',
      data: {
        currentView: 'home'
      },
      components: {
        home: { /* ... */ },
        posts: { /* ... */ },
        archive: { /* ... */ }
      }
    })

    <component v-bind:is="currentView">
      <!-- 组件在 vm.currentview 变化时改变！ -->
    </component>
  
如果把切换出去的组件想要保留它的状态或避免重新渲染，添加keep-alive指令参数，非活动组件将被缓存。

      <keep-alive>
        <component :is="currentView">
          <!-- 非活动组件将被缓存！ -->
        </component>
      </keep-alive>

## Slots分发内容

一种方式用来混合父组件的内容与子组件自己的模板。比如说：

    <app>
      <app-header></app-header>
      <app-footer></app-footer>
    </app>

app也有自己的模板内容，这时候就需要用到slots。

> 编辑作用域

父组件模板的内容在父组件作用域内编译；子组件模板的内容在子组件作用域内编译。

分发内容就是在父组件作用域内编译。

> 单个Slot

子组件模板只有一个没有属性的 slot 时，父组件整个内容片段将插入到 slot 所在的 DOM 位置，并替换掉 slot 标签本身。

子组件`<my-component>`：

    <div>
        <h2>I'm the child title</h2>
        <slot>
          如果没有分发内容则显示我。
        </slot>
    </div>
父组件：

    <div>
        <h1>I'm the parent title</h1>
        <my-component>
          <p>This is some original content</p>
          <p>This is some more original content</p>
        </my-component>
    </div>

渲染结果：
  
    <div>
        <h1>I'm the parent title</h1>
        <div>
          <h2>I'm the child title</h2>
          <p>This is some original content</p>
          <p>This is some more original content</p>
        </div>
    </div>

> 具名Slots

就是带有name的slot,根据name,对应替换slot。可以有一个匿名 slot ，它是默认 slot ，作为找不到匹配的内容片段的备用插槽。没有备用插槽内容则被抛弃。

组件`<app-layout>`:

    <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
    </div>
父组件模版：

    <app-layout>
        <h1 slot="header">Here might be a page title</h1>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        <p slot="footer">Here's some contact info</p>
    </app-layout>

渲染结果：

    <div class="container">
        <header>
          <h1>Here might be a page title</h1>
        </header>
        <main>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </main>
        <footer>
          <p>Here's some contact info</p>
        </footer>
    </div>
