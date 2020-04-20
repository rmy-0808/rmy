<template>
  <div class="wzl_sousuo">
    <div class="wzl_one">
      <p>
        <van-icon name="arrow-left" />
        <b>搜索</b>
      </p>
      <img src="/static/img/img_04.gif" alt />
    </div>
    <div class="wzl_two">
      <van-search v-model="value" @input="input()" @keydown.enter="enter()" placeholder="请输入搜索关键词" />
      <p>取消</p>
    </div>
    <div class="wzl_sou">
        <ul>
            <li v-for="(v,i) in list" :key="i">
                {{v.title}}
            </li>
        </ul>
    </div>
    <div class="wzl_jilu">
        <div>
            <b>历史记录</b>
            <van-icon name="failure" @click="del()"/>
        </div>
        <ul>
            <li v-for="(v,i) in local" :key="i">{{v.name}}</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sousuo",
  data() {
    return {
      value: "",
      list:[],
      local:JSON.parse(localStorage.getItem('list'))||[]
    };
  },
  methods:{
      //搜索
      input(){
          var arr=[]
          if(this.value==''){
              this.list=[]
          }else{
          this.$axios.get('/static/list.json').then((res)=>{
              console.log(res)
              res.data.result.forEach((v,i)=>{
                  if(v.title.indexOf(this.value)!=-1){
                      arr.push(v)
                  }
              })
          })
          }
          this.list=arr
      },
    //   按下回车历史保存
    enter(){
        var obj={
            name:this.value
        }
       var index=this.local.findIndex((v,i)=>{
            return v.name==this.value
        })
        if(index==-1){
            //最多显示六条
            if(this.local.length>=6){
                this.local.splice(0,1)
            }
            this.local.push(obj)
        }else{
            return false
        }
        localStorage.setItem('list',JSON.stringify(this.local))
    },
    //清空历史记录
    del(){
        this.local=[]
        localStorage.setItem('list',JSON.stringify(this.local))
    }
  }
};
</script>
<style lang="scss" scoped>
.wzl_sousuo {
  width: 100%;
}
.wzl_one {
  padding: 0 0.15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & > p {
    display: flex;
    align-items: center;
    & > i {
      font-size: 0.22rem;
    }
  }
}
.wzl_two {
  display: flex;
  align-items: center;
  .van-search {
    width: 85%;
  }
}
.wzl_jilu{
    width: 100%;
  padding: 0 0.15rem;
    &>div{
        display: flex;
        justify-content: space-between;
        margin: 0.1rem 0;
    }
    &>ul{
        display: flex;
        flex-wrap: wrap;
        &>li{
            padding:0.1rem ;
            background-color: #f5f5f5;
            text-align: center;
            margin: 0 0.1rem;
            border-radius: 0.08rem;
        }
    }
}
.wzl_sou{
    width: 100%;
    &>ul{
    width: 100%;
        & li{
            border-bottom: 1px solid #ccc;
            padding: 0.1rem ;
        }
    }
}
</style>