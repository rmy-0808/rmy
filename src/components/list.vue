<template>
    <div class="wzl_list">
         <ul>
             <li v-for="(v,i) in list" :key="i">
                 <img :src="v.pic" alt="">
                 <p>{{v.title}}</p>
                 <div>
                    <b>￥{{v.price}}</b>
                 <!-- <img :src="v.s_pic" alt=""> -->
                 <van-icon name="shopping-cart-o" @click="goshop(v)"/>
                 </div>
              
             </li>
        </ul>   
    </div>
</template>
<script>
import Bus from '@/Bus.js'
export default {
    name:"List",
    data() {
        return {
            list:[]
        }
    },
    mounted(){
        this.$axios.get('/static/list.json').then((res)=>{
            // console.log(res)
            this.list=res.data.result
        })
    },
    created(){
        Bus.$on('id',(date)=>{
            var arr=[]
            this.$axios.get('/static/list.json').then((res)=>{
             res.data.result.forEach((v,i)=>{
                 if(v.cid==date){
                    arr.push(v)
                 }
             })
             })
             this.list=arr
        })
        //排序状态的接受
        Bus.$on('sort',(date)=>{
            if(date%2!=0){
                this.list.sort((a,b)=>{
                    return a.price-b.price
                })
            }else{
                this.list.sort((a,b)=>{
                    return b.price-a.price
                })
            }
        })
    },
    methods:{
        goshop(v){
            Bus.$emit('goshop',v)
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzl_list{
        min-height: 101%;
        &>ul{
            display: flex;
            flex-wrap: wrap;
            background-color: #f8f8f8;
            width: 100%;
            justify-content: space-between;
            & li{
                width: 49%;
                margin: 0.1rem 0;
                background-color: #fff;
                & img{
                    width: 100%;
                }
                & div{
                    padding: 0.05rem;
                    margin-top: 0.1rem;
                    display: flex;
                    justify-content: space-between;
                }
            }
        }
    }
</style>