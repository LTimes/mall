import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { getToken } from '@/lib/util'

Vue.use(Router)

const router = new Router({
        routes,
        mode: 'history'
    })
const loginName = 'Index'

// // 路由拦截
router.beforeEach((to, from, next) => {
    const token = getToken()

    if (!token && to.name !== loginName) {
        // 未登录且要跳转的不是登录页 
        next({
            name: loginName // 跳到shou页
        })
    } else if (token && to.name === 'post') {
        // 已登录且要跳转的页面是登录页
        next({
            name: 'post' // 跳到发布页
        })
    } else {
        // 其他 有token 而且进入其他页面的
        next()
    }
})

router.afterEach(to => {

})

export default router