<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import "./../css/common.css";
import "./../fonts/icon/iconfont.css";
import Header from "./../index/common/header.vue"; 
import Footer from "./../index/common/footer.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
}
</script>
<style>
#app{
  padding-top:53px;
}
</style>