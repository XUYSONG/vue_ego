<template>
  <div>
    <HanderNav></HanderNav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from "@/components/HanderNav.vue"
import HanderNav from "@/components/HanderNav.vue";

export default {
    comments: {
        HeaderNav
    },
    components: { HanderNav }
}
</script>

<style>

</style>