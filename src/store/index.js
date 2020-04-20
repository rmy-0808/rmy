import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store=new Vuex.Store({
    state:{
        arr:[],
    },
    mutations:{
        //在这个方法中可以直接修改state中的数据，只有这一个方法可以修改
        // addshop(state,i){
        //     state.arr[i].***=**
        // }
    },
    getters:{
        //类似于我们的计算属性  有return返回值
    }
})

//抛出
export default store