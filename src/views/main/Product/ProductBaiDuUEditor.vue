<template>
  <div>
    <vue-ueditor-wrap v-model="msg" :config="myConfig">
    </vue-ueditor-wrap>
  </div>
</template>

<script>

// 引入组件vue-ueditor-wrap
import VueUeditorWrap from 'vue-ueditor-wrap'; // ES6 Module

export default {
  data () {
    return {
      msg: '',
      myConfig: {
        // 编辑器不自动被内容撑高
      autoHeightEnabled:false,
      // 初始容器高度
      initialFrameHeight:240,
      // 初始容器宽度
      initialFrameWidth:"100%",
      // 访问 UEditor 静态资源的根路径，可参考 https://hc199421.gitee.io/vue-ueditor-wrap/#/faq
      UEDITOR_HOME_URL: "/UEditor/",
      // 服务端接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
      serverUrl: "http://localhost:3000/api/upload",
    },
    }
  },
  // 注册组件
  components: {
  VueUeditorWrap
}
}
</script>

<style>

</style>