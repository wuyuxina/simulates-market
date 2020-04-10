<template>
    <div class="footerBar" v-show="showflag">
      <div class="fill_footer"></div>
      <ul class="footer_ul">
<!--        循环底部导航栏-->
        <li v-for="(item,index) in footerbar" :key="item.index">
         <router-link :to="item.url" :class="paths==item.url?'activefooter':''">
             <i class="iconfont icon-wode" :class="item.iconfotr"></i>
           <span class="fotr_title">{{item.title}}</span>
         </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "footerBar",
        data(){
            return{
                paths:null,//定义切换类
                showflag:true,
                footerbar:[//底部导航栏的数据渲染
                    {
                        url:'/home',
                        iconfotr:'icon-shouye',
                        title:'首页'
                    },
                    {
                        url:'/category',
                        iconfotr:'icon-fenlei',
                        title:'分类'
                    },
                    {
                        url:'/discover',
                        iconfotr:'icon-faxian',
                        title:'发现'
                    },
                    {
                        url:'/shopcar',
                        iconfotr:'icon-gouwuche',
                        title:'购物车'
                    },
                    {
                        url:'/mine',
                        iconfotr:'icon-wode',
                        title:'我的'
                    }
                ],
            }
        },
        mounted(){
            this.actives();
        },
        methods:{
            //1.记录刷新后得导航，2.记录刷新后的底部栏显示或者隐藏
           actives(){
               const path=this.$route.path.split('/')
               this.paths='/'+path[1]
               this.showflag=this.$store.state.bottomsflags;
           }
        },
        watch:{
            //监听切换active按钮样式
            '$route'(to,from){
                const path=to.path.split('/')
                this.paths='/'+path[1];
            },
            //这是监听控制底部导航的显示或隐藏
            '$store.state.bottomsflags'(){
                this.showflag=this.$store.state.bottomsflags;
            }
        }
    }
</script>

