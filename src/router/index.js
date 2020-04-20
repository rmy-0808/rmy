import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Sousuo from '@/components/sousuo'
Vue.use(Router)

var router=new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:"/search",
      name:"Sousuo",
      component:Sousuo,
    }
  ],
})
//全局路由守卫
// router.beforeEach((to,from,next)=>{
  //to是要去的路由页面
  //form 从哪个页面来
  //next() 是否有权进去
  // })
export default router
