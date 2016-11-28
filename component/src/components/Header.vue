<template>
    <div class="header">
        <h2>{{message}}</h2>
        <slot name="header"></slot>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                message: '我是head!'
            }
        }
    }
</script>
<style>
    .header{
        background-color: green;
        line-height: 60px;
        text-align: center;
    }
</style>