<template>

      <div class="index-left-block">
        <h2>全部产品</h2>
        <div v-for="(product,index) in productList" :key="index">
          <h3>{{product.title}}</h3>
          <ul>
            <li v-for="(item,index) in product.list" :key="index">
              <a :href="item.url">{{item.name}}</a>
              <span class="hot-tag" v-if="item.hot">HOT</span>
            </li>
          </ul>
        </div>
      </div>

</template>

<script>
export default {
  data(){
    return{
      productList:[
        {
          title:'手机应用类',
          list:[
            {
              id:1,
              name:'91助手',
              url:"http://iwenwiki.com",
              hot:true
            },
            {
              id:2,
              name:'豌豆荚',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:3,
              name:'金山毒霸',
              url:"http://iwenwiki.com",
              hot:false
            },
          ]
        },
        {
          title:'PC产品类',
          list:[
            {
              id:1,
              name:'webStorom',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:2,
              name:'Hbuilder',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:3,
              name:'Sub',
              url:"http://iwenwiki.com",
              hot:false
            },
          ]

        },
        {
          title:'手机应用类2',
          list:[
            {
              id:1,
              name:'91助手',
              url:"http://iwenwiki.com",
              hot:true
            },
            {
              id:2,
              name:'豌豆荚',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:3,
              name:'金山毒霸',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:4,
              name:'豌豆荚',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:5,
              name:'金山毒霸',
              url:"http://iwenwiki.com",
              hot:false
            },
            {
              id:6,
              name:'火狐',
              url:"http://iwenwiki.com",
              hot:false
            },
          ]
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>

  .index-left-block{
    margin:15px;
    background-color: white;
    box-shadow: 0 0 1px #ddd;

  }
  .index-left-block .hr{
    margin-bottom: 20px;
    height: 1px;
    width: 100px;
    background-color: #ddd;
  }
  .index-left-block h2{
    background:#3d9e72;
    color: #fff;
    padding: 10px 15px;
    margin-bottom: 20px;

  }
  .index-left-block h3{
    padding: 0 15px 5px 15px;
    font-weight: bold;
    color: #222;

  }
  .index-left-block ul{
    padding: 10px 15px;

  }
  .index-left-block li{
    padding: 5px;
    a{
      color: #222;
    }
  }
  .hot-tag{
    background: red;
    color: #fff;
  }

</style>