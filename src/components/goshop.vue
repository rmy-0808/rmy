<template>
    <div>
        <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <div class="wzl_show">
            <img :src="obj.pic" alt="">

            <div>
                <p> <b>￥{{obj.price}}</b> <b @click="yc()">X</b> </p>
                <p>已选择</p>
            </div>
            </div>
            <div class="wzl_showtwo">
                <p>购买数量</p>
                <p>
                <button @click="jian()">-</button>
                <input type="text" :value="num">
                <button @click="jia()">+</button>
                </p>
            </div>
            <button class="wzl_queren" @click="yes()">确认</button>
        </van-popup>
    </div>
</template>
<script>
import Bus from '@/Bus.js'
export default {
    name:"Goshop",
    data() {
        return {
            show:false,
            obj:{},
            //数量
            num:1,
        }
    },
    created(){
        Bus.$on('goshop',date=>{
            this.show=true
            this.obj=date
        })
    },
    methods:{
        jia(){
            this.num++
        },
        jian(){
            this.num--
            if(this.num<=1){
                this.num=1
                return false
            }
        },
        yes(){
            console.log(`你已选择商品命为${this.obj.title},价格为${this.obj.price},数量为${this.num}`)
        },
        yc(){
            this.show=false
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzl_show{
        width: 100%;
        display: flex;
        padding: 0.1rem;
        &>img{
            width: 1rem;
        }
        &>div{
            width: 100%;
            & :nth-child(1){
                display: flex;
                justify-content: space-between;
                &>:nth-child(1){
                    color: red;
                }
            }
        }
    }
    .wzl_showtwo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 0.2rem;
        &>:nth-child(2){
            display: flex;
            button,input{
                width: 0.35rem;
                height: 0.35rem;
                text-align: center;
            }
        }
    }
    .wzl_queren{
        width: 100%;
        background-color: rgb(53, 9, 9);
        color: white;
        border: none;
        padding:  0.1rem 0;
        position: absolute;
        bottom: 0;
    }
</style>