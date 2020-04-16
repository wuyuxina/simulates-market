<template>
  <div class="home">
    <div class="header_home">
      <div class="rbg_color"></div>
<!--      头部导航的样式-->
      <header-bar class="bar_home">
        <div class="bar_home_left" slot="left">
          <router-link to="/category">
            <i class="iconfont icon-caidan"></i>
          </router-link></div>
        <div class="bar_home_center" slot="center">
          <router-link to="/search">
<!--            公共搜索框开始-->
            <search>
              <div class="show_JD" slot="show_jd">
                      <span class="jd">WF</span>
              </div>
            </search>
          </router-link>
        </div>
        <div class="bar_home__right" slot="right">
          <router-link to="/login">登录</router-link>
        </div>
      </header-bar>
    </div>
    <!--      首页轮播开始-->
    <swiper :swiperList="imglist"></swiper>
  </div>
</template>

<script>
  import {service} from "../../http/request";
  import swiper from "../../components/swiper";
  // import {  Toast } from "mint-ui"
  import headerBar from "../../components/headerBar";
  import search from "../../components/search/search";
    export default {
        components:{headerBar,search,swiper},
        name: "home",
        data(){
            return{
                imglist:[]//轮播图数据
            }
        },
        mounted(){
            //请求轮播图数据
            this.httpswiper()
        },
        methods:{
            // 轮播图数据
            httpswiper(){
                let that=this;
                 service.get('/api/shuffling_figure',{}).then(res=>{
                     let listswiper=[];
                     res.forEach((item,index)=>{
                        let shuffingurls='http://123.57.254.38:8080/maven_water_pay/'+item.shufflingurl;
                         item.shuffingurls=shuffingurls
                         listswiper.push(item)
                     })
                     that.imglist=listswiper;
                 })
            }
        },
    }
</script>

