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
    <!--快报-->
    <div class="marquee">
      <span class="marquee_title">快报</span>
      <div class="marquee_div inner-container">
        <ul id="marquee_ul" class="marquee_ul" :class="{anim:animate==true}" >
          <li class="marquee_li" v-for="(item,index) in listmarquee" :key="index">
            <router-link to="#">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
      <mt-button class="marquee_more clearbtn">
          <router-link to="#">更多</router-link>
      </mt-button>
    </div>
    <!--为你推荐-->
    <div class="recommend">
      <img src="@/assets/image/recommend.png" class="img_title">
      <!--商品列表  2列-->
    <div  v-infinite-scroll="loadMore"
             infinite-scroll-disabled="loading"
             infinite-scroll-distance="0"
             infinite-scroll-immediate-check="false"
      >
      <index-shop-list-two :listshop="listshop"></index-shop-list-two>
      <li class="wait-list-loading" v-show="queryLoading">
        <span v-show="moreLoading&&!allLoaded">加载中...</span>
        <span v-show="allLoaded">已全部加载</span>
      </li>
    </div>
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
                animate:false,
                //无限滚动所需参数开始
                queryLoading: true,
                loading: false,
                moreLoading:true,
                allLoaded: false,
                //无限滚动所需参数结束
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
                //滚动数据
                listmarquee:[
                    {
                        title:'学烘焙很简单，入门工具要必备1'
                    },
                    {
                        title:'学烘焙很简单，入门工具要必备2'
                    },
                    {
                        title:'学烘焙很简单，入门工具要必备3'
                    },
                    {
                        title:'学烘焙很简单，入门工具要必备4'
                    },
                    {
                        title:'学烘焙很简单，入门工具要必备5'
                    }
                ],
                //列表数据
                listshop:[],
            }
        },
        mounted(){
            //请求轮播图数据
            this.httpswiper();
            setInterval(this.scroll,3000);
            this.shoplist()
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
            },
            //跑马灯滚动（竖向滚动）
            scroll(){
                this.animate=true;
                setTimeout(()=>{
                    this.listmarquee.push(this.listmarquee[0]);
                    this.listmarquee.shift();
                    this.animate=false;
                },1000)
            },
            //传入列表数据
            shoplist(){
                let that=this;
                setTimeout(()=>{
                    for(let i=0;i<15; i++){
                        that.listshop.push({
                            shopimg:require("@/assets/image/daylist1.png"),
                            name:'味它小型犬博美狗粮成犬幼犬粮全犬期狗粮'+i+'共2.5kg',
                            price:'44.8',
                        })
                    }
                    that.loading = false;
                    this.moreLoading=false;
                },1500)
            },
            loadMore(){
                let that=this;
                that.loading = true;
                that.moreLoading=true;
                that.shoplist();
            },
        },
    }
</script>

