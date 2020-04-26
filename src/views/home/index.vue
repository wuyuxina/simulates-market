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
        <li class="list_ul_li">
          <h3 class="li_h3">免息星球</h3>
          <p class="li_title">白条免息购</p>
          <img class="li_img" src="@/assets/image/newexclusive.png">
        </li>
        <li class="list_ul_li">
          <h3 class="li_h3">免息星球</h3>
          <p class="li_title">白条免息购</p>
          <img class="li_img" src="@/assets/image/newexclusive.png">
        </li>
        <li class="list_ul_li">
          <h3 class="li_h3">免息星球</h3>
          <p class="li_title">白条免息购</p>
          <img class="li_img" src="@/assets/image/newexclusive.png">
        </li>
        <li class="list_ul_li">
          <h3 class="li_h3">免息星球</h3>
          <p class="li_title">白条免息购</p>
          <img class="li_img" src="@/assets/image/newexclusive.png">
        </li>
        <li class="list_ul_li">
          <h3 class="li_h3">免息星球</h3>
          <p class="li_title">白条免息购</p>
          <img class="li_img" src="@/assets/image/newexclusive.png">
        </li>
      </ul>
    </div>
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
              imglist:[],//轮播图数据
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

