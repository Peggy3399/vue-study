<template>
    <div class="page">
        <plj-header>
            <h1 slot="header">Here might be a page title</h1>
        </plj-header>
        <plj-content>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </plj-content>
        <plj-footer>
            <p slot="footer">Here might be a page footer</p>
        </plj-footer>
        <slot name="main"></slot>
        <!-- <keep-alive> -->
            <component :is="currentView">
                <!-- 组件在 vm.currentview 变化时改变！ -->
            </component>
        <!-- </keep-alive> -->
    </div>
</template>
<script>
    import Header from './Header.vue'
    import Content from './Content.vue'
    import Footer from './Footer.vue'

    export default{
        data (){
            return {
                currentView: 'plj-footer'
            }
        },
        components:{
            'plj-header': Header,
            'plj-content': Content,
            'plj-footer': Footer
        }
    }
</script>