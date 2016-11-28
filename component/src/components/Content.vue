<template>
    <div class="content">
        <h2>{{message}}</h2>
        <slot></slot>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                message: '我是Content!111111111111111111'
            }
        }
    }
</script>
<style>
    .content{
        text-align: center;
    }
</style>