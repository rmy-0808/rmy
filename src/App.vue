<template>
  <div class="app">
    <img src="/static/img/img_01.gif" alt="">
   
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.16rem;
}
img{
  display:block
}
// .wzl_content{
//   width: 100%;
//   flex-grow: 1;
// }
</style>
