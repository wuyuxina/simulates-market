<template>
    <div class="shopcar">
      <headerBar class="car_header">
<!--        头部右侧插槽-->
        <div slot="right">
          <div class="meun">
            <i class="iconfont icon-caidan"></i>
          </div>
        </div>
      </headerBar>
      <div>
        <span>登录后可同步账户购物车中的商品</span>
        <mt-button></mt-button>
      </div>
    </div>
</template>

<script>
  import headerBar from "../../components/headerBar";
    export default {
        name: "shopcar",
        components:{headerBar}
    }
</script>
