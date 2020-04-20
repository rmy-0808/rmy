<template>
    <div class="wzl_search">
            <div>
                <b>lativ</b>
                <img src="/static/img/img_04.gif" alt="">
            </div>
            <van-search v-model="value" @focus="focus()" placeholder="请输入搜索关键词" />
    </div>
</template>
<script>
export default {
    name:"Search",
    data() {
        return {
            value:""
        }
    },
    methods:{
        focus(){
            this.$router.push('/search')
        }
    }
}
</script>
<style lang="scss" scoped>
    .wzl_search{
        width: 100%;
        &>div{
            display: flex;
            padding: 0 0.16rem;
            justify-content: space-between;
            margin-bottom: 0.1rem;
        }
      /deep/  .van-search__content{
            border-radius: 0.15rem;
        }
    }
</style>