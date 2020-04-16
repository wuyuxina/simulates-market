<template>
  <div class="swpier">
    <mt-swipe :auto="4000" class="mt_swipe" >
      <mt-swipe-item v-for="item in swiperList" :key="item.id" :id="item.shufflingid" class="mt_swipe_item">
        <img :src="item.shuffingurls" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "swiper",
        props:{//获取父组件的数据
            swiperList:{
                type:Array,
                default:function(){
                    return ""
                }
            }
        },
        data(){
            return{

            }
        }
    }
</script>

