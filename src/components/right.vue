<template>
  <div>
    <div v-if="kk ==1">
      <GoodList :goodId="1"></GoodList>
    </div>
    <div v-else-if="kk ==2">
     <GoodList :goodId="2"></GoodList>
    </div>
    <div v-else>
     <GoodList :goodId="0"></GoodList>
    </div>
  </div>
</template>
<style>
  .title{
    width: 100px;
    color: red;
  }
  .menu li{
    list-style: none;
    height: 50px;
    margin-bottom: 2px;
    background-color: white;
    line-height: 50px;
  }
</style>
<script>
// eslint-disable-next-line no-unused-vars
import Msg from './msg.js'
import GoodList from './goodList.vue'
export default{
  data () {
    return {
      kk: 0
    }
  },
  mounted: function () {
    var _this = this
    Msg.$on('val', function (m) {
      _this.kk = m
    })
  },
  components: {
    GoodList
  }
}
</script>
