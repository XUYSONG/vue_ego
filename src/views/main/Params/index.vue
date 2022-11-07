<template>
  <div class="Params">
    <ParamsHeader :searchHandle="$api.ParamsSearch"></ParamsHeader>
    <ParamsList></ParamsList>
    <ParamsPagination :total="20"></ParamsPagination>
    <ParamsAdd></ParamsAdd>

  </div>
</template>

<script>

import ParamsList from './ParamsList.vue';
import ParamsPagination from "@/components/PubPagination.vue"
import ParamsHeader from "@/components/PubHeader.vue"
import ParamsAdd from "./ParamsAdd.vue"

export default {
  components:{
    ParamsList,
    ParamsPagination,
    ParamsHeader,
    ParamsAdd
  }

}
</script>

<style scoped>
.Params{
  width: 1200px;
  margin:0 auto;
}
</style>