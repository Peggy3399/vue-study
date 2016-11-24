<template>
    <div id="basic">
        <h2>条件渲染</h2>
        <h3>#v-if v-show</h3>
        <div id="demo1">
            <button @click="flag = !flag">Click(v-if)</button>
            <button @click="flag2 = !flag2">Click(v-show)</button>
            <p v-if="flag">v-if!</p>
            <p v-show="flag2">v-show!</p>
        </div>
        <p class="text">区别：两者同样都是控制元素的显示与隐藏，v-if是整个dom结构的有与无得切换，v-show是给dom添加display属性控制元素，dom结构是存在的。</p>
        <h2>表单控件</h2>
        <h3>#v-model</h3>
        <div id="demo2">
            <p>{{message}}</p>
            <input v-model="message">
        </div>
        <router-link to="/basic">路由嵌套test1</router-link></li>
        <router-link to="/basic/test1">路由嵌套test2</router-link></li>
        <router-view></router-view>
    </div>
</template>
<script lang="babel">
    export default({
        data (){
            return{
                flag: true,
                flag2: true,
                message:''
            }
        }
    })
</script>
<style>
    h2{
        color: gray;
    }
    h3{
        color: blue;
    }
    .text{
        color: red;
    }
</style>