<template>
    <div class="fr">
        <span style="background: rgba(0,0,0,.5);" @click="countDown($event)">{{message}}</span>
    </div>
</template>
<script>
  import $ from 'jquery';
  export default {
    data (){
        return {
            status: true,
            interval: '',
            message: '获 取验证码',
            num: 10
        }
    },
    methods: {
        countDown (e){
            if(this.status){
                this.djstime(e);
                this.status = false;
            }
        },
        djstime (e){
            var _self = this;
            this.interval = setInterval(function(){
                _self.message = "剩余"+_self.num+"秒";
                $(e.currentTarget).css("line-height","35px");
                _self.num--;
                if(_self.num < 0){
                    $(e.currentTarget).css({
                        'cursor': "pointer",
                        'line-height': "18px"
                    });
                    _self.message = "重新获取";
                    _self.status = true;
                    _self.num = 10;
                    clearInterval(_self.interval);
                }
            },1000);
        }
    }
  }
</script>
