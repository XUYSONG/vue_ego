<template>
  <div>
    <!-- mode="horizontal" :导航条的方向 -->
    <el-menu
      :default-active="active"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      @select="handleSelect"
    >
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="product">商品管理</el-menu-item>
      <el-menu-item index="params">规格参数</el-menu-item>
      <el-menu-item index="ad">广告管理</el-menu-item>
      <el-menu-item index="" class="user">
        <span class="user-name">{{user.username}}</span>
        <el-button  @click="loginoutHander">退出</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

export default {
  data() {
    return {
      active: '/',
    }
  },
  computed:{
    ...mapState("login",["user"])
  },
  mounted(){
    if(sessionStorage.getItem("key")){
      this.active = sessionStorage.getItem("key")
    }
  },
  methods:{
    ...mapMutations("login",["setUser"]),
    loginoutHander(){
      this.setUser({})
      localStorage.removeItem('ego')
      this.$router.push('/login')
    },
    handleSelect(key,keypath){
      sessionStorage.setItem("key",key)
      console.log(key);
    }
  }
}
</script>

<style lang="less" scoped>
  .user{
    float:right !important;
    margin-right: 20px !important;
    line-height: 60px !important;
    .user-name{
      color:#fff;
      margin-right: 10px;
      font-size: 15px;
      border:1px solid #fff;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: inline-block;
      line-height: 40px;
      text-align: center;
      overflow: hidden;
    }
  }
</style>
