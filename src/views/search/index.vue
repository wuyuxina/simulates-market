<template>
  <div class="search">
<!--    引入header头部-->
    <header-bar>
<!--      头左侧返回按钮-->
      <div class="search_left" slot="left">
        <i class="iconfont icon-caidan"></i>
      </div>
<!--      头中间的搜索功能-->
      <div class="serch_center" slot="center">
        <search></search>
      </div>
<!--      头部右侧的搜索按钮-->
      <div class="serch_right" slot="right">
        <router-link to="">搜索</router-link>
      </div>
    </header-bar>

  </div>
</template>

<script>
  import headerBar from "../../components/headerBar";
  import search from "../../components/search/search";
    export default {
        components:{search,headerBar},
        name: "index"
    }
</script>

