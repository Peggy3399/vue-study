<template>
    <div class="page">
        <plj-main>
            <p slot="main">分割线</p>
        </plj-main>
        <plj-header></plj-header>
    </div>
</template>
<script>
    import Main from './components/Main.vue'
    import Header from './components/Header.vue'

    export default{
        components:{
            'plj-main': Main,
            'plj-header': Header
        }
    }
</script>
<style>
    *{
        padding: 0;
        margin: 0;
    }
</style>