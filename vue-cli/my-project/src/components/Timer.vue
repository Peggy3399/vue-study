<template>
  <div class="fr"><span style="background: rgba(0,0,0,.5);" class="fr check_span" id="send" @click="countDown()">获 取验证码</span></div>
</template>
<script>
  import $ from 'jquery';
  export default {
    methods: {
      countDown (){
        console.log(1);
      }
    }
  }
</script>
