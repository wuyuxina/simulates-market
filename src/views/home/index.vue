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
    <!--秘术奥义障眼法-->
    <div class="roll" ></div>
    <!--列表按钮-->
    <div class="listbtn">
      <ul class="btn_ul">
        <li v-for="(item,index) in listbtn" :key="item.index">
          <mt-button class="clearbtn">
            <router-link :to="item.link">
              <img class="btn_img" :src="item.img">
              <p class="btn_title">{{item.title}}</p>
            </router-link>
          </mt-button>
        </li>
      </ul>
    </div>
    <!--优惠部分-->
    <div class="row newspeople">
      <router-link to="#" tag="div" class="newsone">
        <img  src="@/assets/image/newpeople.png">
      </router-link>
      <router-link to="#" tag="div" class="newstwo">
        <img  src="@/assets/image/newexclusive.png">
      </router-link>
    </div>
    <!--每日逛-->
    <div class="daysee">
      <img src="@/assets/image/mrg.png" class="img_title">
      <ul class="list_ul_day">
        <li class="list_ul_li" v-for="(item,index) in daylist" :key="item.index">
          <h3 class="li_h3">{{item.title}}</h3>
          <p class="li_title">{{item.content}}</p>
          <img class="li_img" :src="item.images">
        </li>
      </ul>
    </div>
    <!--巡风快报-->
    <div class="marquee">

    </div>
    <!--为你推荐-->
    <div class="recommend">
      <img src="@/assets/image/recommend.png" class="img_title">
      <!--商品列表  2列-->
      <index-shop-list-two></index-shop-list-two>
    </div>
  </div>
</template>

<script>
  import {service} from "../../http/request";
  import swiper from "../../components/swiper";
  // import {  Toast } from "mint-ui"
  import  indexShopListTwo from "../../components/shopList/indexShopListTwo"
  import headerBar from "../../components/headerBar";
  import search from "../../components/search/search";
    export default {
        components:{headerBar,search,swiper,indexShopListTwo},
        name: "home",
        data(){
            return{
              imglist:[],//轮播图数据
              // 列表按钮数据
              listbtn:[
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                },
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                },
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                },
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                },
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                },
                {
                  link:'#',
                  img:require('@/assets/image/wf_list1.png'),
                  title:'原創國際'
                }
              ],
              //每日逛数据
              daylist:[
                {
                  title:'每日特价',
                  content:'9块9疯抢',
                  images:require('@/assets/image/daylist1.png')
                },
                {
                  title:'品牌闪购',
                  content:'汇大牌好价',
                  images:require('@/assets/image/daylist2.png')
                },
                {
                  title:'新品首发',
                  content:'京东小魔方',
                  images:require('@/assets/image/daylist3.png')
                },
                {
                  title:'发现好货',
                  content:'发现品质生活',
                  images:require('@/assets/image/daylist4.png')
                }
              ],
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

