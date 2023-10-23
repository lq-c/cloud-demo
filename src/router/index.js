import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
// import form from './form'
// import formsMulti from './formsMulti'
// import tables from './tables'
// import viewgird from './viewGird'
// import store from '../store/index'
import { useCommonStore } from '@/store/common'
import redirect from './redirect'
// import charts from './charts'
import index from '@/views/Index.vue'
import { useUserInfoStore } from '@/store/user'


import { defineAsyncComponent } from 'vue'
// const _import = (path) => defineAsyncComponent(() => import(`@/views/${path}.vue`));
const _import = (path) => import(`@/views/${path}.vue`);


const routes = [
  {
    path: '/',
    name: 'Index',
    // component: () => import('@/views/Index.vue'),
    component: index,
    redirect: '/home',
    children: [
      ...redirect,
      {
        path: '/document',
        name: 'document',
        // component: _import('document/index')
        component: () => import('@/views/document/index.vue')
      },
      {
        path: '/personnel',
        name: 'personnel',
        component: () => import('@/views/personnel/index.vue')
      },
      {
        path: '/home',
        name: 'home',
        // component: _import('Home')
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/settings/user.vue')
      },
      {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project/index.vue')
      },
      {
        path: '/project-manage',
        name: 'project-manage',
        component: () => import('@/views/settings/project-manage.vue')
      },
      // {
      //   path: '/system', //发起流程示例
      //   name: 'system',
      //   component: () => import('@/views/system/flow/FlowDemo.vue'),
      //   meta: {
      //     keepAlive: false
      //   }
      // }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    // meta:{
    //     anonymous:true
    //   }
  },
  // {
  //   path: '/app/guide',
  //   name: 'apphome',
  //   meta: {
  //     anonymous: true
  //   },
  //   component: () => import('@/views/h5/Guide.vue'),
  // },
  // {
  //   path: '/bigdata',
  //   name: 'bigdata',
  //   component: () => import('@/views/charts/bigdata.vue'),
  //   meta: {
  //     keepAlive: false
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(), //createWebHistory(process.env.BASE_URL),
  // createWebHashHistory
  routes
})


router.beforeEach((to, from, next) => {
  const commonStore = useCommonStore();
  const userStore = useUserInfoStore();
  commonStore.updatingLoading(true)

  if (to.name != 'login' && !userStore.token) {
    next({ name: 'login' })
  } else {
    next()
  }

})
router.afterEach((to, from) => {
  // store.dispatch("onLoading", false);
  const commonStore = useCommonStore();
  commonStore.updatingLoading(false)
})
// router.onError((error) => {
//   // const targetPath = router.currentRoute.value.matched;
//   try {
//     console.log(error.message);
//     if (process.env.NODE_ENV == 'development') {
//       alert(error.message)
//     }
//     localStorage.setItem("route_error", error.message)
//   } catch (e) {

//   }
//   window.location.href = '/'
// });
export default router
