<template>
    <div class="footerBar">
      <ul class="footer_ul">
<!--        循环底部导航栏-->
        <li v-for="(item,index) in footerbar" :key="item.index">
         <router-link :to="item.url">
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
                footerbar:[
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
        }
    }
</script>

