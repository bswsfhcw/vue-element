<template>
    <div name="show">
        <ul class="goodList">
            <li v-for="(goods ,index) in list" v-bind:key="index">
                <img v-bind:src="goods.img">
                <p>{{goods.goodName}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'show',
  data () {
    var obj = this
    var url = ''
    if (obj.goodId === 1) {
      url = '../../static/json/bjb.json'
    } else if (obj.goodId === 2) {
      url = '../../static/json/shouji.json'
    } else {
      url = '../../static/json/bjb.json'
    }
    this.$http.get(url).then(function (res) {
      obj.list = res.data
    })
    return {
      list: []
    }
  },
  props: {
    goodId: Number
  },
  watch: {
    goodId () {
      var obj = this
      var url = ''
      if (obj.goodId === 1) {
        url = '../../static/json/bjb.json'
      } else if (obj.goodId === 2) {
        url = '../../static/json/shouji.json'
      } else {
        url = '../../static/json/bjb.json'
      }
      this.$http.get(url).then(function (res) {
        obj.list = res.data
      })
    }
  }
}
</script>
<style >
.goodList li{
    width: 200px;
    height: 200px;
    list-style: none;
    float: left;
    font-size: 9px;
    color: red;
    margin-bottom: 30px;
}
.goodList img{
    width: 180;
    height: 180px;
}
</style>
