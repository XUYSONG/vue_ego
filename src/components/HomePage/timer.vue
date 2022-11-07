<template>
  <div class="chooser-components">
    <ul class="chooser-list">
      <li @click="timerHand(item,index)" :class="{active:nowIndex === index}" v-for="(item,index) in timerData" :key="index">{{item.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nowIndex:0,
      
    }
  },
  props:{
    timerData:{
      type:Array,
      default:function(){
        return [
          {
            value:'test',
            id:0
          }
        ]
      }
    }
  },
  methods:{
    timerHand(item,index){
      this.nowIndex = index
    }
  }
}
</script>

<style scoped>
.chooser-components{
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #3e3e33;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active{
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}

</style>