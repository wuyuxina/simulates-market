<template>
<!--  project作为跟页面-->
  <div class="project">
    <header-bar></header-bar>
<!--    内容部分开始-->
      <transition name="fade-left" mode="out-in">
        <router-view></router-view>
      </transition>
<!--    底部导航栏开始-->
   <footer-bar></footer-bar>
  </div>
</template>

<script>
  import headerBar from "../components/headerBar";
  import footerBar from "../components/footerBar";
    export default {
        components:{headerBar,footerBar},
        name: "project"
    }
</script>
