<template>
    <div class="page">
        <!-- <plj-main>
            <p slot="main">---------------------------------分割线------------------</p>
        </plj-main>
        <plj-header></plj-header> -->
        <plj-timer></plj-timer>
    </div>
</template>
<script>
    import Main from './components/Main.vue'
    import Header from './components/Header.vue'
    import Timer from './components/Timer.vue'

    export default{
        components:{
            'plj-main': Main,
            'plj-header': Header,
            'plj-timer': Timer
        }
    }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }
</style>