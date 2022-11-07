<template>
  <el-dialog
    title="添加产品"
    :visible.sync="dialogAddVisible"
    width="70%"
    @before-close="handleClose"
  >
    <el-form label-width="70px" :model="addForm" ref="addForm">
      <el-form-item label="商品目录">
        <el-button type="primary" @click="dialogCategoryHandle" class="btn"
          >类目选择</el-button
        >
        <span class="tree">{{ treeData.name }}</span>
        <el-dialog
          width="50%"
          append-to-body
          title="类目选择"
          :visible.sync="dialogCategoryVisible"
        >
          <ProductTree @onTree="getTreeData"></ProductTree>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogCategoryVisible = false"
              >确定</el-button
            >
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="addForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品卖点">
        <el-input v-model="addForm.sellPoint"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="addForm.price"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="addForm.num"></el-input>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-button type="primary" @click="dialogUploadHandle" class="btn"
          >图片上传</el-button
        >
        <!-- <span class="tree"></span> -->
        <el-dialog
          width="50%"
          append-to-body
          title="图片上传"
          :visible.sync="dialogUploadVisible"
        >
          <ProductBaiDuUEditor @onUpload="getOnUpload"></ProductBaiDuUEditor>
          <!-- <ProdyctUpload></ProdyctUpload> -->
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogUploadVisible = false"
              >确定</el-button
            >
          </span>
        </el-dialog>
      </el-form-item>
      <el-form-item label="商品描述">
        <ProductWangEditorVue @onEditor="getEditor"></ProductWangEditorVue>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogAddVisible = false">取 消</el-button>
      <el-button type="primary" @click="addProductHandel">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import ProductTree from './ProductTree.vue'
import ProdyctUpload from './ProductUpload.vue'
import ProductBaiDuUEditor from './ProductBaiDuUEditor.vue'
import ProductWangEditorVue from './ProductWangEditor.vue'

export default {
  data() {
    return {
      dialogAddVisible: false,
      dialogCategoryVisible: false,
      dialogUploadVisible: false,
      addForm: {
        name: '',
        sellPoint: '',
        price: '',
        num: '',
      },
      treeData: {}, //类目选择
      editorData:"", //富文本
    }
  },
  components: {
    ProductTree,
    ProdyctUpload,
    ProductBaiDuUEditor,
    ProductWangEditorVue,
  },
  mounted() {
    this.$bus.$on('onAddEvent', (flag) => {
      this.dialogAddVisible = flag
    })
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    dialogCategoryHandle() {
      this.dialogCategoryVisible = true
    },
    dialogUploadHandle() {
      this.dialogUploadVisible = true
    },
    // 读取类目数据
    getTreeData(data) {
      // this.$on("onTree",)
      // console.log(data);
      this.treeData = data
    },
    // 读取图片地址
    getOnUpload(data) {
      this.price = data
    },
    // 接收富文本编辑器数据
    getEditor(data) {
      this.editorData = data
    },
    // 添加产品
    addProductHandel(){
      this.$api.insertTbItem({
        cid:this.treeData,
        title:this.addForm.name,
        sellPoint:this.addForm.sellPoint,
        price:this.addForm.price,
        num:this.addForm.num,
        desc:this.editorData,
      }).then(res =>{
        console.log(res.data);
        if(res,data.status === 200){
          this.dialogAddVisible = false
          this.$bus.$emit("refresh",true)
        }
      }).catch(error =>{
        console.log(error);
      })
    }
  },
}
</script>

<style lang="less" scoped>
.btn {
  float: left;
  margin-left: 10px;
}
.tree {
  float: left;
  margin-left: 10px;
}
</style>
