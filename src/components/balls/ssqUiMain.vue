<template>
<div>
  <div v-if="url =='sjck'">
    <Sjck></Sjck>
  </div>
  <div v-else-if="url =='qsfx'">
    <Qsfx></Qsfx>
  </div>
  <div v-else>
    <Sjck></Sjck>
  </div>
</div>
</template>
<script>
import Msg from './msg.js'
import Qsfx from './Qsfx.vue'
import Sjck from './Sjck.vue'
export default{
  data () {
    return {
      url: 0
    }
  },
  mounted: function () {
    var _this = this
    Msg.$on('url', function (res) {
      _this.url = res
    })
  },
  components: {
    Qsfx,
    Sjck
  }
}
</script>
