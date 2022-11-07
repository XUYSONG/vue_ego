<template>
  <div class="head">
    <el-form ref="searchForm" :model="search" @submit.native.prevent>
      <el-form-item>
        <el-input v-model="search.content" @keyup.enter.native="onSubmitSearch"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitSearch">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addFormHandle">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:{
        content:""
      }
    }
  },
  props:{
    searchHandle:{
      type:Function,
      required:true
    }
  },
  methods:{
    onSubmitSearch(){
      this.searchHandle({search:this.search.content}).then(res =>{
        console.log(res.data);
        this.$bus.$emit("onSearch",res.data.result)
      })
    },
    addFormHandle(){
      this.$bus.$emit("onFlag",true),
      console.log("111");
    }
  }
}
</script>

<style lang="less" scoped>
.el-form{
  overflow: hidden;
  clear: both;
  .el-form-item{
    float: left;
    margin-right: 10px;
    .el-input{
      width: 1030px;
    }
  }
}

.head{
  margin-top: 20px;
  width: 100%;
}

</style>