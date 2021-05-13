<template>
  <el-container>
    <el-header >
     <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click="change('sjck')">数据仓库</el-menu-item>
        <el-submenu index="2">
          <template slot="title">基础分析</template>
          <el-menu-item index="2-1" @click="change('qsfx')">趋势分析</el-menu-item>
          <el-menu-item index="2-2">红码</el-menu-item>
          <el-menu-item index="2-3">蓝码</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>多维度分析</el-menu-item>
        <el-menu-item index="4" @click="change('mbjd')">模拟机打</el-menu-item>
        <el-menu-item index="5"><a href="https://www.baidu.com" target="_blank">度娘一下</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <ssqUiMain></ssqUiMain>
    </el-main>
  </el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>

<script>
import Msg from './msg.js'
import ssqUiMain from './ssqUiMain.vue'

export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    change: function (url) {
      Msg.$emit('url', url)
      console.log('url:' + url)
    },
    handleSelect: function (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    ssqUiMain
  }
}
</script>
