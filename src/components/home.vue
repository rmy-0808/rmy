<template>
    <div class="wzl_home">
        <Search></Search>
        <Nav></Nav>
     <div class="wzl_content" ref="bscroll">
      <List></List>
     </div>
     <van-icon name="upgrade" v-if="flag" @click="gotop()"/>
     <Goshop></Goshop>
        <Footer></Footer>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import Footer from './footer'
import Search from './search'
import Goshop from './goshop'
import Nav from './nav'
import List from './list'
export default {
    name:"Home",
    components:{Footer,Search,Nav,List,Goshop},
    data() {
        return {
            // 返回向上的状态
            flag:false
        }
    },
    mounted(){
        this.scrollFn()
    },
    methods:{
        //返回顶部
        gotop(){
            this.scroll.scrollTo(0,0,2000)
        },
        scrollFn(){
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll('.wzl_content', {
                        click: true,
                        scrollY: true,
                        probeType: 3
                    });
                }else{
                    this.scroll.refresh();
                }
                this.scroll.on('scroll', (pos) => {
                    console.log(pos)
                    if(pos.y<=-1){
                        this.flag=true
                    }else{
                        this.flag=false
                    }
                })
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzl_home{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .wzl_content{
        flex-grow: 1;
        overflow: hidden;
    }
    .van-icon{
        position: fixed;
        right: 5%;
        font-size: 0.5rem;
        bottom: 20%;
    }
</style>