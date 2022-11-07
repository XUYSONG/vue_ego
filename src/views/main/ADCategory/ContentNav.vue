<template>
  <div class="content-nav">
    <el-tree
      :props="defaultProps"
      lazy
      :load="loadNode"
      @node-click="handleNodeClick"
    >

    </el-tree>
  </div>
</template>

<script>
export default {
  data(){
    return{
      defaultProps:{
        children:"children",
        label:"name"
      }
    }
  },
  methods:{
    http(id,resolve){
      this.$api.selectContentCategoryByParentId(id).then((res) =>{
          if(res.data.status === 200){
            return resolve(res.data.result)
          }else{
            return resolve([])
          }
        })
    },
    loadNode(node,resolve){
      console.log(node);
      if(node.level === 0){
        this.http(1,resolve)
      }
      if(node.level > 1){
        this.http({
          id:node.data.id
        },resolve)
      }
    },
    handleNodeClick(){

    }
  }
}
</script>

<style>

</style>