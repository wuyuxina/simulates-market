<template>
  <div class="headerBar">
    <div class="header">
<!--      将slot用div包裹，因为不能直接操作插槽   分为左中右布局-->
      <div class="left_nav" ><slot name="left">
        <mt-button class="clearbtn"  icon="back" @click="$router.back(-1)"></mt-button>
      </slot></div>
      <div class="center_nav"><slot name="center">
        <search></search>
      </slot></div>
      <div class="right_nav"><slot name="right"></slot></div>
    </div>
    <div class="fill_header"></div>
  </div>
</template>

<script>
  import search from "./search/search";
    export default {
        name: "headerBar",
        components:{search},
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        },
    }
</script>
