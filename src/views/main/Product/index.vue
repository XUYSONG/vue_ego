<template>
  <div class="product">
    <productHander></productHander>
    <ProductList></ProductList>
    <ProductPagination></ProductPagination>
    <ProductAdd></ProductAdd>
    <ProductEditor></ProductEditor>
  </div>
</template>

<script>

import ProductList from '@/views/main/Product/porductList.vue'
import ProductPagination from './ProductPagination.vue';
import productHander from './productHander.vue';
import ProductAdd from './ProductAdd.vue';
import ProductEditor from './ProductEditor.vue';

export default {

  components:{
    ProductList,
    ProductPagination,
    productHander,
    ProductAdd,
    ProductEditor
  }
}
</script>

<style scoped>
.product{
  width: 1200px;
  margin: 0 auto;
}
</style>