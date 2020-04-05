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
        <search>
            <input slot="searchtag" class="serch_title serch_title_input hide" placeholder="请问你请问你想要搜索什么1请问你想要搜索什么1请问你想要搜索什么1想要搜索什么1">
        </search>
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

