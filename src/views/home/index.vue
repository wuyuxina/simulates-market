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
<!--            我是公共搜索框开始-->
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
  </div>
</template>

<script>
  import headerBar from "../../components/headerBar";
  import search from "../../components/search/search";
    export default {
        components:{headerBar,search},
        name: "home"
    }
</script>

