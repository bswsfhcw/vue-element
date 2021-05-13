<template>
  <el-container style="height: 600px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['2','2-1']">
        <el-submenu index="1">
         <template slot="title"><i class="el-icon-message"></i>Basic</template>
         <el-submenu index="1-1" >
            <template slot="title">Layout 布局</template>
            <el-menu-item index="1-1-1" @click="change('jcbj')">基础布局</el-menu-item>
            <el-menu-item index="1-1-2"  @click="change('fljg')">分栏间隔</el-menu-item>
            <el-menu-item index="1-1-3">混合布局</el-menu-item>
            <el-menu-item index="1-1-4">分栏偏移</el-menu-item>
            <el-menu-item index="1-1-5">对齐方式</el-menu-item>
            <el-menu-item index="1-1-6">响应式布局</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2" >
            <template slot="title">Container 布局容器</template>
            <el-menu-item index="1-2-1" @click="change('cjymbj')">常见页面布局</el-menu-item>
            <el-menu-item index="1-2-2"  @click="change('sl')">实例</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-3" @click="change('ys')">Color 色彩</el-menu-item>
          <el-menu-item index="1-4" >Typography 字体</el-menu-item>
          <el-menu-item index="1-5" >Border 边框</el-menu-item>
          <el-menu-item index="1-6" @click="change('tb')">Icon 图标</el-menu-item>
          <el-menu-item index="1-7" @click="change('button')">Button 按钮</el-menu-item>
          <el-menu-item index="1-8" @click="change('textLink')">Link 文字链接</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
         <template slot="title"><i class="el-icon-message"></i>Form</template>
         <el-submenu index="2-1" >
            <template slot="title">Form 表单</template>
            <el-menu-item index="2-1-1" @click="change('dxbd')">典型表单</el-menu-item>
            <el-menu-item index="2-1-2"  @click="change('dhbd')">多行表单</el-menu-item>
            <el-submenu index="2-2" >
            <template slot="title">Form 表单组件</template>
            <el-menu-item index="2-2-1" @click="change('dxk')">Radio 单选框</el-menu-item>
            <el-menu-item index="2-2-2"  @click="change('dxks')">Checkbox 多选框</el-menu-item>
          </el-submenu>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <ElementUiMain></ElementUiMain>
    </el-main>
  </el-container>
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
import ElementUiMain from './elementUiMain.vue'
export default {
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods: {
    change: function (url) {
      Msg.$emit('url', url)
      console.log('url:' + url)
    }
  },
  components: {
    ElementUiMain
  }
}
</script>
