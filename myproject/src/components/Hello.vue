<template>
    <div class="date-picker">
        <input type="text" autocomplete="off" readonly :value="day" @focus="show" @blur="hide">
        <transition name="date-fade">
            <!-- <plj-date prop=""></plj-date> -->
            <div class="date-container" v-show="showDateBox">
                <div class="date-title">
                    <span class="pre-btn btn" @mousedown.prevent="prevMonth">&lt;&lt;</span>
                    <span @mousedown.prevent="showMonth">{{year}}年{{month}}月</span>
                    <span class="next-btn btn" @mousedown.prevent="nextMonth">&gt;&gt;</span>
                    <div class="month" v-show="yearShowVisible">
                        <span @mousedown.prevent="prevYear">&lt;&lt;</span>
                        <span @mousedown.prevent="nextYear">&gt;&gt;</span>
                        <span v-for="item in yearList">{{item}}</span>
                    </div>
                    <div class="month" v-show="monthShowVisible">
                        <span v-for="item in monthList">{{item}}</span>
                    </div>
                    <i v-for="i in week" @mousedown.prevent="" class="list-item week">{{i}}</i>
                </div>
                <transition-group name="list" tag="div">
                    <span v-for="(item, index) in items" :key="item.key" class="list-item">{{ item.Day }}</span>
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script>
    // import Date from './Date.vue'
    export default{
        data () {
            return{
                currentdate: '',
                showDateBox: true,
                yearShowVisible: false,
                monthShowVisible: false,
                year: '',
                month: '',
                week: ['日', '一', '二', '三', '四', '五', '六'],
                yearList: Array.apply(null, {length: 10}).map((v, k) => {
                    let y = new Date().getFullYear()
                    return (y + k + 1);
                }),
                monthList: Array.apply(null, {length: 12}).map((v, k) => {
                    return (k + 1) + '月';
                }),
                items: Array.apply(null, {length: 42}).map((v, k) => {
                    return {key: k, Day: k % 32 + 1};
                })
            }
        },
        /*components: {
            'plj-date': Date
        },*/
        // Vue检测到数据发生变动时就会执行对相应数据有引用的函数,computed可以做一些监控之类的效果。
        computed:{
            day () {
                let date = new Date();
                this.year = date.getFullYear();
                this.month = date.getMonth() + 1;
                return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            }
        },
        methods: {
            hide () {
                this.showDateBox = false;
            },
            show () {
                this.showDateBox = true;
            },
            showMonth (){
                if(this.yearShowVisible){
                    this.hideYear();
                    this.monthShowVisible = true;
                }else if(this.monthShowVisible){
                    this.hideMonth();
                    this.showYear();
                }else{
                    this.showYear();
                }
            },
            hideMonth (){
                this.monthShowVisible = false;
            },
            showYear (){
                this.yearShowVisible = true;
            },
            hideYear (){
                this.yearShowVisible = false;
            },
            prevMonth (){
                this.hideMonth();
                this.hideYear();
                if(this.month === 1){
                    this.month = 13;
                    this.year --;
                }
                return this.month --;
            },
            nextMonth (){
                this.hideMonth();
                this.hideYear();
                if(this.month === 12){
                    this.month = 0;
                    this.year ++;
                }
                return this.month ++;
            },
            prevYear (){
                this.yearList = this.yearList.map((v, k) => {
                    return v - 10;
                })
            },
            nextYear (){
                this.yearList = this.yearList.map((v, k) => {
                    return v + 10;
                })
            }
        }
    }
</script>

<style>
    .date-picker {
        width: 225px;
        position: relative;
        display: inline-block;
    }
    .date-picker>input {
        padding: 0 2%;
        width: 95%;
        height: 1.6em;
    }
    .date-container {
        width: 100%;
        position: absolute;
        z-index: 999;
    }
    .date-title {
        font-size: 0;
        position: relative;
    }
    .date-title .next-btn, .date-title .pre-btn {
        background: lightblue;
        color: #fff;
        width: 21%;
    }
    .date-title span {
        display: inline-block;
        background: #fff;
        font-size: 14px;
        padding: 3px 0;
        text-align: center;
        width: 58%;
        cursor: pointer;
    }
    .month {
        position: absolute;
        width: 58%;
        font-size: 0;
        left: 21%;
    }
    .month span {
        font-size: 14px;
        width: 48%;
        background-color: rgba(255,255,255,.9);
        border: 1px solid #efefef;
        cursor: pointer;
    }
    .month .selected {
        background: #aaf;
    }
    .list-item.preMonth, .list-item.nextMonth {
        background: #fff;
    }

    .list-item.selected {
        background: #aaf;
    }

    .list-item.week {
        background: #afa;
        font-size: 14px;
        padding: 3px 0;
        font-style: normal;
    }

    .list-item {
        display: inline-block;
        width: 13.4%;
        border: 1px solid #eee;
        text-align: center;
        transition: all .5s;
        cursor: pointer;
        background: #ffa;
    }

    .list-enter {
        opacity: 0;
        transform: translateY(30px) scale(.5) rotate(45deg);
        -o-transform: translateY(30px) scale(.5) rotate(45deg);
        -ms-transform: translateY(30px) scale(.5) rotate(45deg);
        -moz-transform: translateY(30px) scale(.5) rotate(45deg);
        -webkit-transform: translateY(30px) scale(.5) rotate(45deg);
    }

    .list-leave-active {
        opacity: 0;
        transform: translateY(-30px) scale(.5) rotate(-45deg);
        -o-transform: translateY(-30px) scale(.5) rotate(-45deg);
        -ms-transform: translateY(-30px) scale(.5) rotate(-45deg);
        -moz-transform: translateY(-30px) scale(.5) rotate(-45deg);
        -webkit-transform: translateY(-30px) scale(.5) rotate(-45deg);
        position: absolute;
    }
    .date-fade-enter-active,.date-fade-leave-active {
        transition: all .5s;
        -o-transition: all .5s;
        -ms-transition: all .5s;
        -moz-transition: all .5s;
        -webkit-transition: all .5s;
    }
    .date-fade-enter,.date-fade-leave-active {
        transform:scaleY(0);
        -o-transform:scaleY(0);
        -ms-transform:scaleY(0);
        -moz-transform:scaleY(0);
        -webkit-transform:scaleY(0);
    }
</style>
