<template>
  <div class="index-board-list">
    <div 
      class="index-board-item"
      v-for="(item,index) in buyData"
      :key="index"
      :class="['index-board-' + item.url]"
    >
    <div class="index-board-item-inner">
      <h2>{{item.title}}</h2>
      <p>{{item.desc}}</p>
    </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      buyData:[
        {
          title:"开放产品",
          desc:"开发产品描述",
          url:'openproduct'
        },
        {
          title:"开放产品",
          desc:"开发产品描述",
          url:'logo'
        },
        {
          title:"开放产品",
          desc:"开发产品描述",
          url:'golife'
        },
        {
          title:"开放产品",
          desc:"开发产品描述",
          url:'heigh'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.index-board-list{
  width: 400px;
  overflow: hidden;
  margin-top: 15px;

}
.index-board-item{
  float: left;
  width:400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px 0;
  margin-right: 20px;
  margin-bottom: 20px;

}
.index-board-item-inner{
  min-height: 125px;
  padding-left: 120px;
}
.index-board-openproduct .index-board-item-inner{
  background: url('@/assets/imags/1.png') no-repeat;
  // background-size: 100px;
}
.index-board-logo .index-board-item-inner{
  background: url('@/assets/imags/2.png') no-repeat;
}
.index-board-golife .index-board-item-inner{
  background: url('@/assets/imags/3.png') no-repeat;
}
.index-board-heigh .index-board-item-inner{
  background: url('@/assets/imags/4.png') no-repeat;
}
.index-board-item h2{
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last{
  margin-right: 0;
}
.index-board-button{
  margin-top: 20px;

}
.lastest-news{
  min-height: 350px;

}
.new-item{
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bottom{
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>