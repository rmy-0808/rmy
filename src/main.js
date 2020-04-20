// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入我们的vuex
import store from './store'

//axios的引入
import axios from 'axios'
Vue.prototype.$axios=axios

//element-ui的引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


//vant的引入
import Vant from 'vant';//vant
import 'vant/lib/index.css';//vant
Vue.use(Vant);//vant


//图片懒加载
// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad,{
// //该图片是搜的线上图片.
// error:'https://img-blog.csdnimg.cn/20190731173428106.png',       //报错时需要的图片
// loading:'http://img1.imgtn.bdimg.com/it/u=2584726257,3204821792&fm=26&gp=0.jpg'	 //加载时需要的图片
// })


//引入我们的rem
import './rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
