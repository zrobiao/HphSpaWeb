<template>
  <div>
    <section class="top-banner">
      <img src="../../../static/img/detailPage_banner.jpg" v-if="this.$route.query.flag=='2'">
      <img src="../../../static/img/aboutUs_banner.jpg" v-if="this.$route.query.flag=='3'">
    </section>
    <div class="container detail-content">
      <ul class="row">
        <li class="col-lg-12 col-md-12 col-xs-12 text-center">
          <h3>这里是标题</h3>
        </li>
        <li class="col-lg-12 col-md-12 col-xs-12">
          <p class="col-lg-6 col-md-6 col-xs-6 text-left">发布时间：2018-05-16</p>
          <p class="col-lg-6 col-md-6 col-xs-6 text-right">文章来源：www.kkpeihu.com</p>
        </li>
        <li class="col-lg-12 col-md-12 col-xs-12">
          <div>这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。这里是一段介绍文字，对！很多很多的文字。</div>
        </li>
        <li class="col-lg-12 col-md-12 col-xs-12 text-right">
          <h6 style="margin:50px 0;color:#34b8de;font-size:1.6rem;" v-on:click="go">返回上一页</h6>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import router from '../../router/index.js'
export default {
  created() {
    this.$store.state.flag = this.$route.query.flag
    document.title="详细信息"
  },
  methods: {
    go:function(){
      router.go(-1)
    }
  }
};
</script>
<style>
.top-banner {
  width: 100%;
  height: 300px;
  position: relative;
}
.top-banner img {
  width: 100%;
  height: auto;
}
.detail-content h6{
  margin:50px 0;
  color:#34b8de;
  font-size:1.6rem;
  cursor: pointer;
}
</style>


