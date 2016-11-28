<template>
    <div id="app">
        <plj-hello @selected="log($event)"></plj-hello>
        <h1>{{msg}}</h1>
        <div>{{aaa}}</div>
    </div>
</template>

<script>
    import Hello from './components/Hello.vue'
    export default{
        data (){
            return {
                msg: 'Welcome!',
                aaa: ''
            }
        },
        components: {
            'plj-hello': Hello
        },
        methods: {
            log (data) {
                data.date = new Date(data.date).toLocalDateString('zh-cn');
                this.msg = '选中的日期：' + data.date;
                this.aaa = JSON.stringify(data);
                console.log(data.date.toLocalString());
            }
        }
    }
</script>

<style>
    #app {
      font-family: simhei;
      text-align: center;
      margin-top: 60px;
    }
</style>

