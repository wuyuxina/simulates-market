<template>
  <div class="category">
    <headerBar class="category_searh">
      <div class="" slot="center">
        <router-link to="/search">
          <!-- 公共搜索框开始-->
          <search></search>
        </router-link>
      </div>
      <div slot="right">
        <div class="meun">
          <i class="iconfont icon-caidan"></i>
        </div>
      </div>
    </headerBar>
    <div class="category_tab">
      <!--        选项卡头部-->
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          infinite-scroll-immediate-check="false"
          class="category_ul">
        <li v-for="(item,index) in list"
            :key="index"
            class="category_ul_li"
            :id="item.id"
            @click="tabOn(index)"
            :class="tabindex==index?'tabactive':''">{{item.name}}</li>
        <!--底部判断是加载图标还是提示“全部加载”-->
        <li class="wait-list-loading" v-show="queryLoading">
          <span v-show="moreLoading&&!allLoaded">加载中...</span>
          <span v-show="allLoaded">已全部加载</span>
        </li>
      </ul>
      <!--        选项卡内容部分开始-->
      <div class="category_content">
        <!--          选项卡循环项开始-->
        <ul class="tab_content_ul"
            ref="tab_cont"
            v-for="(item,index) in tabcontent_list"
            :key="index">
          <li class="tab_content_ul_li"
              v-for="(items,indexs) in item.tabcontent_list_s"
              :key="indexs">
            <img src="@/assets/image/category_list1.png" alt="" class="tab_content_img">
            <span class="tab_content_title">{{items.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    import headerBar from "../../components/headerBar";
    import search from "../../components/search/search";
    import {service} from "../../http/request";
    import { Indicator } from 'mint-ui';
    export default {
        name: "category",
        components:{headerBar,search},
        data(){
            return{
                tabindex:0,//记录当前选择的选项卡索引值
                loading: true, //为true时不会触发加载更多，false可以触发
                // loadingDom: true,
                queryLoading: true,
                moreLoading: false,
                allLoaded: false,
                //选项卡头部数据
                list:[],
                //选项卡内容数据
                tabcontent_list:[
                    {
                        tabcontent_list_s:[
                            {
                                title:'美妆小博主1'
                            },
                            {
                                title:'美妆小博主2'
                            },
                            {
                                title:'美妆小博主3'
                            },
                            {
                                title:'美妆小博主4'
                            }
                        ]
                    },
                    {
                        tabcontent_list_s:[
                            {
                                title:'美妆小博主1'
                            },
                            {
                                title:'美妆小博主2'
                            },
                            {
                                title:'美妆小博主3'
                            },
                            {
                                title:'美妆小博主4'
                            }
                        ]
                    },
                    {
                        tabcontent_list_s:[
                            {
                                title:'美妆小博主1'
                            },
                            {
                                title:'美妆小博主2'
                            },
                            {
                                title:'美妆小博主3'
                            },
                            {
                                title:'美妆小博主4'
                            }
                        ]
                    },
                    {
                        tabcontent_list_s:[
                            {
                                title:'美妆小博主1'
                            },
                            {
                                title:'美妆小博主2'
                            },
                            {
                                title:'美妆小博主3'
                            },
                            {
                                title:'美妆小博主4'
                            }
                        ]
                    },
                ]
            }
        },
        mounted(){

            this.loadMore();
        },
        methods:{
            //选项卡头部数据的加载
            loadMore() {
                let that=this;
                let data={};
                this.loading = true;
                this.moreLoading=true;
                service.get('/api/classification',{}).then((res)=>{
                    that.loading = false;
                    this.moreLoading=false;
                    that.list=that.list.concat(res.data.info);

                })
            //     this.loading = true;
            //     this.moreLoading=true;
            //     setTimeout(() => {
            //         for (let i = 1; i <= 28; i++) {
            //             this.list.push("我是列表" + i);
            //         }
            //         this.moreLoading=false;
            //         this.loading = false;
            //     }, 3000);

            },
            //选项卡切换功能,内容显示
            tabOn(index){
                let that=this;
                that.tabindex=index;
                that.$refs.tab_cont.forEach((item,indexs)=>{
                    item.style.display="none"
                })
                that.$refs.tab_cont[index].style.display="flex"
            },
        }
    }
</script>
