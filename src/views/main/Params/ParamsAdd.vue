<template>
  <el-dialog
    title="选择产品分类"
    :visible.sync="dialogTreeVisible"
    width="60%"
    :before-close="handleClose"
  >
      <ParamsTree @onTree="getTreeData"></ParamsTree>
      <el-dialog
        title="添加规格参数"
        :visible.sync="dialogParamsVisible"
        width="60%"
        :before-close="handleClose"
      >
        <el-button @click="addParamsFormHandle">添加主结构</el-button>

        <el-form :model="paramsForm" ref="paramsForm">
            <el-form-item
                v-for="(item,index) in paramsForm.inputList"
                :key="index"
                label="规格参数"
            >
            <el-input v-model="item.value" style="width:90%"></el-input>
                <el-button @click="removeParamsFormHandle(index)">删除主结构</el-button>
                <el-button @click="addParamsChild(index)">添加规格参数子结构</el-button>
                <!-- <el-button @click="removeDomain(item)">删除分组</el-button> -->
                <div v-for="(childItem,childIndex) in item.children" :key="childIndex">
                  <div style="width:90%;margin-left:80px">
                    <span>规格参数子结构</span>
                    <el-input v-model="childItem.childValue" style="width:60%"></el-input>
                    <el-button @click="removeParamsChild(index,childIndex)">删除子结构</el-button>
                  </div>
                    
                    <!-- <el-button @click="removeChild(index,childItem)">删除参数</el-button> -->
                </div>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogParamsVisible = false">取 消</el-button>
          <el-button type="primary" @click="finshAddParamsHandle">确 定</el-button>
        </span>
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTreeVisible = false">取 消</el-button>
        <el-button type="primary" @click="paramsContentHandle">确 定</el-button>
      </span>
  </el-dialog>
  
</template>

<script>

import ParamsTree from '@/components/PubTree.vue'

export default {
  components:{
    ParamsTree
  },
  data(){
    return{
      dialogParamsVisible:false,
      dialogTreeVisible:false,
      treeData:{},
      paramsForm:{
        inputList:[
          {
            value:"",
            children:[
              {
                childValue:"",
                value:""
              }
            ]
          }
        ]
      }
    }
  },
  mounted(){
    this.$bus.$on("onFlag",flag =>{
      this.dialogTreeVisible = flag

    })
  },
  methods:{
    handleClose(done){
      this.$confirm('确认关闭？')
      .then(_ =>{
        done();
      })
      .catch(_ =>{})
    },
    // 添加主结构
    addParamsFormHandle(){
      this.paramsForm.inputList.push({
        value:"",
            children:[
              {
                childValue:"",
                value:""
              }
            ],
      })
    },
    // 添加规格参数子结构
    addParamsChild(index){
      this.paramsForm.inputList[index].children.push({
        childValue:"",
        value:""
      })
    },

    // 删除主结构
    removeParamsFormHandle(index){
      this.paramsForm.inputList.splice(index,1);
    },
    // 删除子结构
    removeParamsChild(index,childIndex){
      this.paramsForm.inputList[index].children.splice(childIndex,1)
    },  

    // 获取产品分类内容
    getTreeData(data){
      // console.log(data);
      this.treeData = data
    },

    paramsContentHandle(){
      this.dialogParamsVisible = true
    },

    // 完成一个添加
    finshAddParamsHandle(){

      this.$api.insertItemParam({
        itemCatId:this.treeData.cid,
        content: JSON.stringify(this.paramsForm.inputList)
      }).then(res =>{
        if(res.data.status === 200){
          this.dialogTreeVisible = false,
          this.dialogParamsVisible = false
          this.$bus.$emit("paramsAdd",true)
        }
      }).catch(error =>{
        console.log(error);
      })
        
      
    }


  }

}
</script>

<style>

</style>