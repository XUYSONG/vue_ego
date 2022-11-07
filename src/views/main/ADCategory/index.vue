<template>
  <div class="content">
    <div class="content-left">
      <ContentNav></ContentNav>
    </div>
    <div class="content-right">
      <ContentInfo></ContentInfo>
    </div>
  </div>
</template>

<script>

import ContentNav from './ContentNav.vue';
import ContentInfo from './ContentInfo.vue';

export default {
  components:{
    ContentNav,
    ContentInfo
  }

}
</script>

<style scoped>
.content {
    height: 200px;
    margin: 0 auto;
    margin-top: 10px;
    width: 1200px;
}

.content-left {
    float: left;
    width: 25%;
    height: 100%;
}

.content-right {
    float: left;
    width: 75%;
    height: 100%;
}

.custom-tree-node {
    display: inline-block;
    text-align: right;
    width: 100%;
}
.upload img {
    width: 200px;
}
</style>