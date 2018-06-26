<template>
  <div>
    <section class="top-banner">
      <img src="../../../static/img/index/detailPage_banner.jpg" v-if="this.$route.query.flag=='2'">
      <img src="../../../static/img/index/aboutUs_banner.jpg" v-if="this.$route.query.flag=='3'">
    </section>
    <div class="container detail-content">
      <ul class="row">
        <li class="col-lg-12 col-md-12 col-xs-12 text-center">
          <h3>{{consultDetail.title}}</h3>
        </li>
        <li class="col-lg-12 col-md-12 col-xs-12">
          <p class="col-lg-6 col-md-6 col-xs-6 text-left">发布时间：{{consultDetail.releaseTime.split(' ')[0]}}</p>
          <p class="col-lg-6 col-md-6 col-xs-6 text-right">文章来源：<a href="www.kkpeihu.com">www.kkpeihu.com</a></p>
        </li>
        <li class="col-lg-12 col-md-12 col-xs-12">
          <div v-html="consultDetail.content"></div>
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
import util from "./../../js/util/util.js";
export default {
  data(){
    return{
      consultDetail:[]
    }
  },
  created() {
    this.$store.state.flag = this.$route.query.flag
    document.title="详细信息"
    this.getDetailList()
  },
  methods: {
    go:function(){
      router.go(-1)
    },
    getDetailList:function (params) {
      let $this = this;
      let itemId = this.$route.query.id;
      let _params = {
        id: itemId
      };
      util.Ajax(
        "/api/sysConsult/getHomeConsultInfo?_method=POST",
        _params,
        function(data) {
          console.log(data)
          var consultData = data.data;
          $this.consultDetail = consultData.data;
        }
      );
    }
  }
};
</script>
<style scoped>
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


