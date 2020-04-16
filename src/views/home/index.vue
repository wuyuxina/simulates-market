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
                      <span class="jd">JD</span>
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
    <div class="swpier">
      <mt-swipe :auto="4000" class="mt_swipe" >
        <mt-swipe-item v-for="item in imglist" :key="item.id" :id="item.shufflingid" class="mt_swipe_item">
          <img :src="item.shuffingurls" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  import {service} from "../../http/request";
  // import {  Toast } from "mint-ui"
  import headerBar from "../../components/headerBar";
  import search from "../../components/search/search";
    export default {
        components:{headerBar,search},
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
            // 请求轮播图数据
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

