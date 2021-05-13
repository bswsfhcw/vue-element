<template>
    <el-container>
      <div  class="el-row">
        <p>Link 文字链接 文字超链接</p>
        <p>基础用法</p>
        <div>
          <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
          <el-link type="primary">主要链接</el-link>
          <el-link type="success">成功链接</el-link>
          <el-link type="warning">警告链接</el-link>
          <el-link type="danger">危险链接</el-link>
          <el-link type="info">信息链接</el-link>
        </div>
        <p>禁用状态</p>
        <p>文字链接不可用状态。</p>
        <div>
          <el-link disabled>默认链接</el-link>
          <el-link type="primary" disabled>主要链接</el-link>
          <el-link type="success" disabled>成功链接</el-link>
          <el-link type="warning" disabled>警告链接</el-link>
          <el-link type="danger" disabled>危险链接</el-link>
          <el-link type="info" disabled>信息链接</el-link>
        </div>
      </div>
    </el-container>
</template>
<script>
export default {
  methods: {
    wblj: function (url) {
      window.open(url)
    }
  }
}
</script>
