import Home from './../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    alias: 'home_page',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if (from.name === 'about') alert('is from about page')
      // else alert('is from other page')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    props: {
      food: 'banana'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/About.vue')
  },
  {
    path: '/argu/:name',
    name: 'argu',
    props: true,
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    // redirect: '/'
    // redirect: { name: 'home' }
    redirect: to => '/'
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
