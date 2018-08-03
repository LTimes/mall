import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index.vue'
import Category from '@/pages/Category/Category.vue'
import Theme from '@/pages/Theme/Theme.vue'
import Cart from '@/pages/Cart/Cart.vue'
import Home from '@/pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/category',
            name: 'Category',
            component: Category
        },
        {
            path: '/theme',
            name: 'Theme',
            component: Theme
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        }
    ]
})