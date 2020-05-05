<template>
  <div class="indexShopListTwo">
    <ul
      class="shoplisttwo_ul">
      <li class="ul_li" v-for="(item,index) in listshop" :key="index">
        <router-link to="#">
        <img class="shop_title_img" :src="item.shopimg">
<!--        <img class="shop_title_img" src="@/assets/image/daylist1.png">-->
        <p class="shop_title">
          {{item.name}}
        </p>
        <div class="price_similarity">
          <span class="price">￥{{item.price}}<em class="proce_em">满减</em></span>
          <span class="similarity">看相似</span>
        </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
    export default {
        name: "indexShopListTwo",
        props:{//获取父组件的数据
            listshop:{
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
