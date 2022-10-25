<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span></span>
      </div>
      <el-tabs v-model="currentIndex" stretch @tab-click="handleClick">
        <el-tab-pane label="登录" name="login">
          <!-- 用户名 密码 表单 -->
          <el-form :model="loginForm" :rules="rules" status-icon ref="loginForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
                <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
                <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
            </el-form-item>
          </el-form>
          
        </el-tab-pane>
        <!-- 注册 -->
        <el-tab-pane label="注册" name="register" >
          <el-form :model="registerForm" :rules="rules" status-icon ref="registerForm">
            <el-form-item label="用户名" label-width="80px" prop="username">
                <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="80px">
                <el-input type="text" v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
                <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" label-width="80px" prop="configurePassword">
                <el-input type="password" v-model="registerForm.configurePassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>

// 网络请求
import api from "../api"
import {mapMutations} from "vuex"


export default {
  data() {
    //验证规则
    var validateUserName = (rule, value, callback) =>{
      if(value === ''){
        callback(new Error('请输入用户名'))
      }else if(value.length <4){
        callback(new Error('用户名长度至少四位'))
      }
      else{
        callback();
      }
    }
    // 验证密码
    var validatePassWord =(rule,value,callback) =>{
      if(value === ''){
        callback(new Error('请输入密码'))
      }else{
        callback();
      }
    }
    // 验证再次输入密码
    var validateConfigurePassword = (rule,value,callback) =>{
      if(value === ''){
        callback(new Error('请再次输入密码'))
      }else if(value !== this.registerForm.password){
        callback(new Error('两次密码不一致！'))
      }else{
        callback();
      }
    }
    return {
      currentIndex: 'login',
      loginForm:{
        username:'',
        password:''
      },
      registerForm:{
        username:'',
        password:'',
        configurePassword:'',
        email:''
      },
      activeTab:"login",
      rules:{
        // usernaem的验证规则
        username:[
          {validator:validateUserName,trigger:'blur'}
        ],
        // 密码的验证规则
        password:[
          {validator:validatePassWord,trigger:'blur'}
        ],
        // 再次密码的验证规则
        configurePassword:[
          {validator:validateConfigurePassword,trigger:'blur'}
        ]
      }
    }
  },
  methods:{
    ...mapMutations("login",["setUser"]),
    submitForm(formName){
      this.$refs[formName].validate((valid)=>{
        if(valid){
          if(this.activeTab === 'login'){
            // 登录
            api.login(this.loginForm).then(res=>{
              // console.log(res.data);
              if(res.data.status === 200){
                this.setUser(res.data)
                localStorage.setItem("ego",JSON.stringify(res.data))
                this.$router.push('/')
              }else{
                  const h = this.$createElement;
                  this.$notify({
                    title: '登录失败',
                    message: h('i', { style: 'color: teal'}, '用户名或密码错误')
                  });
              }
            })
            // console.log('登录', this.loginForm);
          }if(this.activeTab === 'register'){
            // console.log('注册',this.registerForm);
            api.register(this.registerForm).then(res=>{
              if(res.data.status === 200){
                const h = this.$createElement;
                  this.$notify({
                    title: '注册成功',
                    message: h('i', { style: 'color: teal'}, '请前往登录页面登录')
                  });
              }else{
                const h = this.$createElement;
                  this.$notify({
                    title: '注册失败',
                    message: h('i', { style: 'color: teal'}, '请重新注册')
                  });
              }
            })
          }
          
        }else{
          return
        }
      })
    },
    handleClick(tab){
      this.activeTab = tab.name
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 1200px;
  margin: 0 auto;
  .box-card {
    width: 600px;
    margin: 100px auto;
  }
}
</style>
