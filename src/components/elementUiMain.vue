<template>
<div>
  <div v-if="url =='jcbj'">
    <LayoutJcbj></LayoutJcbj>
  </div>
  <div v-else-if="url =='fljg'">
    <LayoutFljg></LayoutFljg>
  </div>
  <div v-else-if="url =='cjymbj'">
    <Containers></Containers>
  </div>
  <div v-else-if="url =='sl'">
    <ContainersSl></ContainersSl>
  </div>
  <div v-else-if="url =='ys'">
    <Ys></Ys>
  </div>
  <div v-else-if="url =='tb'">
    <Tb></Tb>
  </div>
  <div v-else-if="url =='button'">
    <BButton></BButton>
  </div>
  <div v-else-if="url =='textLink'">
    <TextLink></TextLink>
  </div>
  <div v-else-if="url =='dxbd'">
    <Dxbd></Dxbd>
  </div>
  <div v-else-if="url =='dhbd'">
    <Dhbd></Dhbd>
  </div>
  <div v-else-if="url =='dxk'">
    <Dxk></Dxk>
  </div>
  <div v-else-if="url =='dxks'">
    <Dxks></Dxks>
  </div>
  <div v-else>
    <LayoutJcbj></LayoutJcbj>
  </div>
</div>
</template>
<script>
import Msg from './msg.js'
import LayoutJcbj from './elComps/LayoutJcbj.vue'
import LayoutFljg from './elComps/LayoutFljg.vue'
import Containers from './elComps/Containers.vue'
import ContainersSl from './elComps/ContainersSl.vue'
import Ys from './elComps/Ys.vue'
import Tb from './elComps/Tb.vue'
import BButton from './elComps/BButton.vue'
import TextLink from './elComps/TextLink.vue'
import Dxbd from './elComps/Dxbd.vue'
import Dhbd from './elComps/Dhbd.vue'
import Dxk from './elComps/formComps/Dxk.vue'
import Dxks from './elComps/formComps/Dxks.vue'
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
    LayoutJcbj,
    LayoutFljg,
    Containers,
    ContainersSl,
    Ys,
    Tb,
    BButton,
    TextLink,
    Dxbd,
    Dhbd,
    Dxk,
    Dxks
  }
}
</script>
