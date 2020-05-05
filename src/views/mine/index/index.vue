<template>
    <div class="mine">
<!--      头部导航开始-->
      <headerBar class="mine_header">
<!--        右侧插槽-->
        <div slot="right">
          <div class="meun">
            <i class="iconfont icon-caidan"></i>
          </div>
        </div>
      </headerBar>
      <!--    头部红色区域开始-->
      <div class="header_user">
        <!--      导航栏-->
        <div class="user_head">
          <span>设置</span>
          <span>消息</span>
        </div>
        <!--      用户信息-->
        <div class="usermsg">
          <!--        头像-->
          <div class="usermsg_photo">
            <img class="photo_img" src="">
            <span class="phtot_title">未实名</span>
          </div>
          <!--user信息-->
          <div class="usermsg_msg">
            <p>我是虞姬爱泡妞</p>
            <span>京享值<i></i></span>
            <span>信用领10元代金劵<i></i></span>
          </div>
        </div>
        <!--      list列表-->

      </div>

    </div>
</template>

<script>
  import headerBar from "../../../components/headerBar";
    export default {
        name: "mine",
        components:{headerBar},
        data(){
            return{

            }
        },
    }
</script>
