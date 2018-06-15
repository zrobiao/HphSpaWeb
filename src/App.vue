<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import "./common/css/reset.css";
import './assets/bootstrap/css/bootstrap.min.css'
import "./assets/icon/iconfont.css";
import Header from "./components/common/header.vue";
import Footer from "./components/common/footer.vue";
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
