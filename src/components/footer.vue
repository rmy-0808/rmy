<template>
    <div class="wzl_footer">
        <ul>
            <li>
                <router-link to="">
                <i class="fa fa-user-o"></i>
                <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                <i class="fa fa-user-o"></i>
                <p>分类</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                <i class="fa fa-user-o"></i>
                <p>购物车</p>
                </router-link>
            </li>
            <li>
                <router-link to="">
                <i class="fa fa-user-o"></i>
                <p>个人</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Footer"
}
</script>
<style lang="scss">
    .wzl_footer{
        width: 100%;
        height: 0.5rem;
        &>ul{
            display: flex;
            width: 100%;
            flex-shrink: 0;
            border-top: 1px solid #ccc;
            height: 100%;
            &>li{
                width: 100%;
                height: 100%;
               
                &>a{
                 padding: 0.05rem 0;
                    display: block;
                    width: 100%;
                    line-height: 0.2rem;
                    height: 100%;
                    color: black;
                    text-align: center;
                    font-size: 0.12rem;
                    & i{
                        font-size: 0.16rem;
                    }
                }
            }
        }
    }


</style>