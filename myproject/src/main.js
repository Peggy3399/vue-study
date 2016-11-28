import Vue from 'vue';
import App from './App.vue';
new Vue({
    el: '#app',
    component: {
        'plj-app': App
    },
    render: h => h(App)
});