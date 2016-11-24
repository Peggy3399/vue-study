<template>
    <div>
        <h1 class="title">{{msg}}</h1>
        <div class="content">
            <ul class="nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/basic">Vue基础知识</router-link></li>
                <li><router-link to="/advanced" tag="span">Vue底层知识</router-link></li>
                <li><router-link to="/advanced#anchor">/advanced#anchor</router-link></li>
            </ul>
            <section class="right">
                <router-view></router-view>
                <router-view name="test"></router-view>
            </section>
        </div>
    </div>
</template>
<script>
    export default({
        data (){
            return {
                msg: 'Hello vue-router!'
            }
        }
    })
</script>
<style>
    .router-link-active {
      color: #38f;
    }
    *{
        padding: 0;
        margin: 0;
    }
    .title{
        text-align: center;
        line-height: 60px; 
        border-bottom: 3px solid #38f;
    }
    .content{
        margin: 10px auto;
        width: 1000px;
        overflow: hidden;
    }
    .nav{
        width: 200px;
        float: left;
        overflow: hidden;
        background-color: #eee;
    }
    .nav li{
        padding: 20px;
        list-style: none;
        line-height: 30px;
    }
    .right{
        background-color: #eee;
        width: 780px;
        float: right;
    }
</style>