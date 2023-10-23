import { defineAsyncComponent } from 'vue'
const _import = (path) => defineAsyncComponent(() => import(`@/components/redirect/${path}.vue`));


let redirect = [{
    path: '/404',
    name: '404',
    component: _import('404'),
    meta:{
        anonymous:true
      }
}, {
    path: '/401',
    name: '401',
    component: _import('401')
}, {
    path: '/coding',
    name: 'coding',
    component: _import('coding')
}, {
    path: '/message',
    name: 'message',
    component: _import('Message')
}]
export default redirect;