<template>
    <div class="footer">
        <h2>{{message}}</h2>
        <slot name="footer"></slot>
    </div>
</template>
<script>
    export default{
        data (){
            return {
                message: '我是Footer!'
            }
        }
    }
</script>
<style>
    .footer{
        background-color: pink;
        line-height: 60px;
        text-align: center;
    }
</style>