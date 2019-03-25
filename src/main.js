// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import router from './router'
import store from './store/index'
import './utils/rem'
import '@/assets/css/common.scss'

import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle);
Vue.use(ElementUI);

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use md 编辑器
Vue.use(mavonEditor)

// 引入分页全局组件
import page from '@/components/page/page.vue'
Vue.component('Page', page)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})