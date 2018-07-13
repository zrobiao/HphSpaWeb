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
        <li style="margin-bottom:15px;" class="col-lg-12 col-md-12 col-xs-12" v-for="(item,index) in consultItems" :key="item.systemID">
          <div class="list-imgbox col-lg-4 col-md-4 col-xs-4">
            <img :src="item.coverImg">
          </div>
          <div class="list-txtbox col-lg-8 col-md-8 col-xs-8">
            <h4 style="font-weight:700;">{{item.title}}</h4>
            <div v-html="controllerContent(item.content,12)" style="margin:10px 0;"></div>
            <!-- <p style="height:40px;margin:0;">这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字这里是截取的一段文字</p> -->
            <!-- <p style="padding:0;margin:0;">……</p> -->
            <div class="list-bottom">
              <p>{{item.releaseTime.split(' ')[0]}}</p>
              <p style="color:#34b8de" v-on:click="go('/website/Detail',2,item.systemID)">Read More</p>
            </div>
          </div>
        </li>
      </ul>
      <page-nation :page-no="PageTotal" :current.sync="currentPage" @addCurrent="PageLisen"></page-nation>
    </section>
  </div>
</template>

<script>
import router from '../router/index.js'
import util from "./../js/util.js";
import PageNation from './common/Pagination.vue'
export default {
  name: "app",
  components: {PageNation},
  created() {
    this.$store.state.flag = 2;
    document.title = '资讯'
    this.getListData()
  },
  watch:{
    currentPage:'requstData'
  },
  data() {
    return {
      msg: "这里是资讯列表！",
      currentPage:1,
      Page:1,
      Limit:10,
      consultItems:[],
      PageTotal:1
    };
  },
  methods:{
    go:function(url,flag,data){
      router.push({ path: url, query: {flag:flag,id:data }})
    },
    controllerContent:function(content,n){
      content = content.replace(/(\n)/g, "");
                content = content.replace(/(\t)/g, "");
                content = content.replace(/(\r)/g, "");
                content = content.replace(/<\/?[^>]*>/g, "");
                content = content.replace(/\s*/g, "");
                return content.substring(0, n) + "...";
    },
    PageLisen:function(data){
      console.log('子组件数据'+data)
      this.Page = data
      this.getListData()
    },
    getListData:function () {
      //这里从后台获取到当前页码
      let $this = this;
      let _params = {
        page: $this.Page,
        limit: $this.Limit,
      };
      util.Ajax("/api/sysConsult/homeList?_method=POST", _params, function(
        data
      ) {
        console.log(data)
        var consultData = data.data;
        var consult = consultData.data;
        if (!consult || consult.length == 0) {
          $this.noData = "暂时还没有资讯信息！";
        } else {
          for (var i in consult) {
            // let newUrl = $this.WorkerIconChange(consult[i].coverImg);
            // consult[i].coverImg = newUrl;
            consult[i].coverImg = $this.$store.state.consultUrl+consult[i].coverImg;
            $this.consultItems.push(consult[i]);
          }
          console.log(data)
          $this.PageTotal = consultData.totalPages; // 若数据已全部获取完毕
        }
      });
    }
  },
};
</script>
<style scoped>
.top-banner {
  width: 100%;
  height: 300px;
  display:flex;
  display:-webkit-flex;
  justify-content: center;
  align-items: center;
}
.top-banner img {
  width: 100%;
  height: auto;
}
.list-txtbox > p {
  word-wrap:break-word;
  overflow: hidden;
  font-size: 1.4rem;
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
/* 移动端样式调节 */
@media screen and (max-width: 420px) {
.top-banner {
  width: 100%;
  height: 200px;
}
.top-banner img {
  width: auto;
  height: 100%;
}
.info-bigbox {
  width: 100%;
  margin: 0 auto 40px;
  text-align: center;
  padding: 15px;
}
}
</style>
