<template>
  <div>
    <section class="top-banner">
      <img src="../../static/img/detailPage_banner.jpg">
    </section>
    <section class="container list-title">
      <h1>
        <i></i>
        <span>资讯列表</span>
      </h1>
    </section>
    <section class="container">
      <ul class="row" style="margin-bottom:20px;">
        <li class="col-lg-12 col-md-12 col-xs-12">
          <div class="list-imgbox col-lg-4 col-md-4 col-xs-4">
            <img>
          </div>
          <div class="list-txtbox col-lg-8 col-md-8 col-xs-8">
            <h4 style="font-weight:700;">资讯标题</h4>
            <p style="height:40px;margin:0;">这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字</p>
            <p style="padding:0;margin:0;">……</p>
            <div class="list-bottom">
              <p>2018-05-16</p>
              <p style="color:#34b8de" v-on:click="go('/infoList/Detail',2,4)">Read More</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import router from '../router/index.js'
export default {
  name: "app",
  components: {},
  created() {
    this.$store.state.flag = 2;
    document.title = '资讯'
  },
  data() {
    return {
      msg: "这里是资讯列表！"
    };
  },
  methods:{
    go:function(url,flag,data){
      router.push({ path: url, query: {flag:flag,id:data }})
    }
  },
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
.list-txtbox > p {
  word-wrap:break-word;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
}
.list-title h1 {
  font-size: 2.4rem;
  color: #34b8de;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  line-height: 2.8rem;
}
.list-title h1 span {
  display: inline-block;
  vertical-align: middle;
}
.list-title h1 i {
  width: 6px;
  height: 20px;
  background: #34b8de;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
}
.list-bottom {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.list-bottom p {
  color: #ccc;
}
</style>
