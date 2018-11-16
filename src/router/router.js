// import Index from '@/pages/Index/Index.vue'
// import Category from '@/pages/Category/Category.vue'
// import About from '@/pages/about/about.vue'
// import Label from '@/pages/label/label.vue'
// import Detail from '@/pages/detail/detail.vue'


export default [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/',
        name: 'framework',
        component: () =>
            import('@/pages/framework/framework.vue'),
        children: [
            {
                path: '/index',
                name: 'Index',
                component: () =>
                    import('@/pages/index/index.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: '/category',
                name: 'Category',
                component: () =>
                    import('@/pages/category/category.vue'),
                meta: {
                    title: '分类'
                }
            },
            {
                path: '/label',
                name: 'Label',
                component: () =>
                    import('@/pages/label/label.vue'),
                meta: {
                    title: '标签'
                }
            },
            {
                path: '/about',
                name: 'About',
                component: () =>
                    import('@/pages/about/about.vue'),
                meta: {
                    title: '关于'
                }
            },
            {
                path: '/detail',
                name: 'Detail',
                component: () =>
                    import('@/pages/detail/detail.vue'),
                meta: {
                    title: '文章详情'
                }
            }
        ]
    },
    {
        path: '/post',
        name: 'Post',
        component: () =>
            import ('@/pages/post/post.vue'),
        meta: {
            title: '发布文章'
        }
    }
]