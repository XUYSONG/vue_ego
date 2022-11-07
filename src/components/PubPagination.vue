<template>
  <div class="pagination-container">
    <el-pagination
    layout="prev, pager, next,jumper"
    @current-change="handleCurrentChange"
    @size-change="handleSizechange"
    :total="total"
    :current-page.sync="currentPage"
    >
    
    </el-pagination>
  </div>
</template>

<script>
export default {
data(){
  return{
    currentPage:1,
  }
},
props:{
  total:{
    type:[String,Number],
    default:0
  }
},
methods:{
  
  handleSizechange(){

  },
  handleCurrentChange(val){
    // console.log(val);
    this.$bus.$emit("page",val)
  },

}
}
</script>

<style scoped>
.pagination-container{
  margin-top: 50px;
}
</style>