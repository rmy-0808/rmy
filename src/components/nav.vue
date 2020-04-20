<template>
    <div class="wzl_nav">
        <van-tabs v-model="index" @click="navs()">
            <van-tab v-for="(v,i) in nav" :title="v.title">
                <!-- 内容 {{ index }} -->
            </van-tab>
            </van-tabs>
            <div class="wzl_navs">
                <p v-for="(v,i) in arr" :key="i" @click="sort(i)">{{v.name}}</p>
                
            </div>
    </div>
</template>
<script>
import Bus from '@/Bus.js'
export default {
    name:"Nav",
    data() {
        return {
            nav:[],
            index:null,
            //排序
            arr:[
                {id:1,name:"综合"},
                {id:2,name:"销量"},
                {id:3,name:"新品"},
                {id:4,name:"价格^"},
            ],
            // 点击当前状态的下标
            num:0,
        }
    },
    mounted(){
        this.$axios.get('/static/fenlei.json').then((res)=>{
            // console.log(res)
            this.nav=res.data.result
        })
    },
    methods:{
        // 排序部分
        sort(i){
            if(i==3){
            this.num++
            }
            console.log(this.num)
            Bus.$emit('sort',this.num)
        },
        //导航栏
        navs(){
            console.log(this.index)
            this.nav.forEach((v,i)=>{
               if(i==this.index){
                   console.log(v._id)
                   Bus.$emit('id',v._id)
               }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzl_nav{
        width: 100%;
    }
    .wzl_navs{
        width: 60%;
        justify-content: space-around;
        display: flex;
        margin: 0.1rem 0;
    }
    .color{
        color: #d55960;
    }
   /deep/ .van-tabs__line{
        background-color: #c1c1c1;
    }
</style>