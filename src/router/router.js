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
    path: '/index',
    name: 'Index',
    component: () => import('@/pages/Index/Index.vue')
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/pages/Category/Category.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/about/about.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@/pages/detail/detail.vue')
  },
  {
    path: '/label',
    name: 'Label',
    component: () => import('@/pages/label/label.vue')
  }
]