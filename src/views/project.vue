<template>
<!--  project作为跟页面-->
  <div class="project">
<!--    内容部分开始-->
      <transition name="fade-left" mode="out-in">
<!--        动画的使用条件 v-if,v-show,动态逐渐，逐渐根节点-->
        <router-view></router-view>
      </transition>
<!--    底部导航栏开始-->
   <footer-bar></footer-bar>
  </div>
</template>

<script>
  //首先导入组件
  import footerBar from "../components/footerBar";
    export default {
        components:{footerBar},
        name: "project",
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
