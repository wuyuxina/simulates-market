<template>
  <div class="login">
    <h3 class="titles">Welcome to  登录页</h3>
    <h3  class="title_saiban">塞班去哪里!!</h3>
    <div class="login_form">
      <form>
        <div class="row_col">
          <mt-field label="用户名" placeholder="请输入用户名" class="user_login"
                    v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" class="user_login"
                    type="password" v-model="password"></mt-field>
        </div>

<!--        <div class="row_col">-->
<!--          <label>密码</label>-->
<!--          <input type="text" placeholder="请输入密码" />-->
<!--        </div>-->
      </form>
      <mt-button type="primary" class="login_btn" @click="primary">登录</mt-button>
    </div>

  </div>
</template>

<script>
  //引入mint-ui toast提示
    import { Toast } from 'mint-ui';
    import {service} from "../http/request";
  export default {
        name: "login",
        data(){
            return{
                username:'',
                password:'',
            }
        },
        mounted(){

        },
        methods:{
        //点击提交按钮，验证提交的内容是否正确,后向服务器发送请求
            primary(){
                if(this.username==""||this.username==null){
                    Toast({
                        message: '用户名不能为空',
                        position: 'bottom',
                        duration: 5000
                    });
                    return  true;
                }
                if(this.password==""||this.password==null){
                    Toast({
                        message: '密码不能为空',
                        position: 'bottom',
                        duration: 5000
                    });
                    return true;
                }
                let data={
                    username:this.username,
                    password:this.password
                }
                service.post('/api/login/usernamePassword',data).then(function(res){
                    console.log(res)
                })
            }
        }
    }
</script>
