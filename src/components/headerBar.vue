<template>
  <div class="headerBar">
    <div class="header">
<!--      将slot用div包裹，因为不能直接操作插槽   分为左中右布局-->
      <div class="left_nav" @click="$router.back(-1)"><slot name="left"></slot></div>
      <div class="center_nav"><slot name="center"></slot></div>
      <div class="right_nav"><slot name="right"></slot></div>
    </div>
    <div class="fill_header"></div>
  </div>
</template>

<script>
    export default {
        name: "headerBar",
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
