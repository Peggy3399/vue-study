<template>
    <div class="advanced">
        <h3>CSS过渡</h3>
        <div id="demo1">
            <div id="demo">
                <button v-on:click="show1 = !show1">
                    Toggle
                </button>
                <transition name="fade">
                    <p v-if="show1">hello</p>
                </transition>
            </div>
        </div>
        <h3>CSS动画</h3>
        <div id="demo2">
            <button @click="show2 = !show2">Toggle show</button>
            <transition name="bounce">
                <p v-if="show2">Look at me!</p>
            </transition>
        </div>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div id="anchor">advanced#anchor</div>
    </div>
</template>
<script lang="babel">
export default({
    data (){
        return {
            show1: true,
            show2: true
        } 
    }
})
</script>
<style>
    #anchor{
      height: 200px;
      background-color: red;
      color: #fff;
      font-size: 20px;
      text-align: center;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-out .5s;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes bounce-out {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.5);
      }
      100% {
        transform: scale(0);
      }
    }
</style>