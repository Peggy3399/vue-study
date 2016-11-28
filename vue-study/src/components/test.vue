<template>
    <div class="test">{{message}}</div>
</template>
<script lang="babel">
    export default({
        data (){
            return {
                message: 'test'
            }
        }
    })
</script>
<style>
    .test{
        background-color: pink;
    }
</style>