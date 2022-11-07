<template>
  <div class="open">
    <div class="sales-board">
    <div class="sales-board-intor">
      <h2>开放产品</h2>
      <p>
        原本这些方法是针对产品开发过程中不同人群的方法，但是方法
        设计者本身并未考虑到不同方法之间如何去衔接配合，这就带来
        了好方法不能被很好地使用的状况。如何在一个产品团队中，利
        用好这些方法，定制成一个适合一般性团队的通用方法就是OPD需
        要面临解决的问题。OPD会提供一些产品开发过程中的理念、框架、
        方法和工具来帮助产品开发团队中各个角色，不管是刚加入这个行
        业的初学者，还是工作已久的丰富经验者，我相信大家都会有所
        新的收获。
      </p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">购买数量</div>
      <div class="sales-board-line-right">
        <Counter :counterObj="counterObj"/>
      </div>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">产品类型</div>
      <div class="sales-board-line-right">
        <Types :selecterData="selecterData"></Types>
      </div>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line-left">有效时间</div>
      <div class="sales-board-line-right">
        <Timer :timerData="timerData"></Timer>
      </div>
    </div>

    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>
        纯实木系列产品，因存在一些当前世界家具生产技术无法解决
        的问题，如：色差、木质纹理大小差异、棕眼及抛光时花纹处
        留下凹凸不平等现象，望广大用户周知；开裂、变形是实木家
        具的特性，正常使用，再加上合理保养的状况下是能够避免的；
        如：避免太阳光长时间直射、避免风吹雨打、避开冷暖气风口，
        定期清洁打蜡等。
      </p>

      <h3>开始检查</h3>
      <ul>
        <li>
          1、开箱前，检查包装箱外观有无破损，包装箱的标志、产品编号、名称是否与您所选购的产品相同。
        </li>
        <li>
          2、开箱时，用刀轻轻从纸箱分裂处划开，留意不要划伤部件，如产品有石材、玻璃等易碎品，开箱时要留意，以免翻倒造型断裂、破碎。
        </li>
        <li>
          3、开箱后，取出《产品使用说明书》详细阅读说明书后留意取出箱内的产品。
        </li>
        <li>
          4、检查产品编号、名称、数量、颜色是否相符、产品外观有无损伤或其它质量问题。
        </li>
      </ul>

      <h3>安装及调试</h3>
      <ul>
        <li>1.选定安装位置，对地面用软质材料进行防护。</li>
        <li>2.对应安装孔位，将各部件安装紧密牢固。在安装过程中要留意正确操作，尽量避免损伤产品。</li>
        <li>3.安装好的家具要进行下列项目检查。</li>
        <li>①家具组合位置是否正确和紧固，整体产品要牢固平稳。</li>
        <li>②产品外观、形状、颜色是否贴合要求。</li>
        <li>③家具中的活动部件（如门、抽屉、导轨、门铰等）活动是否顺畅，活动范围是否贴合要求。</li>
        <li>④有射灯的柜类，检查电路是否正常，通电后灯是否亮。</li>
        <li>⑤安装好的产品不得在地面上硬拖硬拉，以免划伤地板和损伤产品。</li>
      </ul>
    </div>
  </div>
  </div>
</template>

<script>

import Counter from '@/components/HomePage/counter.vue'
import Types from '@/components/HomePage/types.vue'
import Timer from '@/components/HomePage/timer.vue'

export default {
  data(){
    return{
      counterObj:{
        min:1,
        max:10
      },
      // types组件的数据源
      selecterData:[
        {
          value:'经典型',
          id:1
        },
        {
          value:'升级型',
          id:2
        },
        {
          value:'豪华型',
          id:3
        }
      ],
      // timer组件的数据源
      timerData:[
        {
          value:'一个月',
          id:1
        },
        {
          value:'三个月',
          id:1
        },
        {
          value:'六个月',
          id:1
        },
        {
          value:'一年',
          id:1
        },
      ]
    }
  },
  components:{
    Counter,
    Types,
    Timer
  }
}
</script>

<style scoped>
.open{
  text-align: left;
}
.buy-dialog-title{
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn{
  margin-top: 20px;
}
.buy-dialog-table{
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th{
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;

}
.button{
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
</style>