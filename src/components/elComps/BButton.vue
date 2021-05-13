<template>
    <el-container>
      <div  class="el-row">
        <p>Button 按钮</p>
        <p>基础用法</p>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>
        <el-row>
          <el-button plain>朴素按钮</el-button>
          <el-button type="primary" plain>主要按钮</el-button>
          <el-button type="success" plain>成功按钮</el-button>
          <el-button type="info" plain>信息按钮</el-button>
          <el-button type="warning" plain>警告按钮</el-button>
          <el-button type="danger" plain>危险按钮</el-button>
        </el-row>
        <el-row>
          <el-button round>圆角按钮</el-button>
          <el-button type="primary" round>主要按钮</el-button>
          <el-button type="success" round>成功按钮</el-button>
          <el-button type="info" round>信息按钮</el-button>
          <el-button type="warning" round>警告按钮</el-button>
          <el-button type="danger" round>危险按钮</el-button>
        </el-row>
        <el-row>
          <el-button icon="el-icon-search" circle></el-button>
          <el-button type="primary" icon="el-icon-edit" circle></el-button>
          <el-button type="success" icon="el-icon-check" circle></el-button>
          <el-button type="info" icon="el-icon-message" circle></el-button>
          <el-button type="warning" icon="el-icon-star-off" circle></el-button>
          <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-row>
        <p>禁用状态</p>
        <p>你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。</p>
        <el-row>
          <el-button disabled>默认按钮</el-button>
          <el-button type="primary" disabled>主要按钮</el-button>
          <el-button type="success" disabled>成功按钮</el-button>
          <el-button type="info" disabled>信息按钮</el-button>
          <el-button type="warning" disabled>警告按钮</el-button>
          <el-button type="danger" disabled>危险按钮</el-button>
        </el-row>
        <el-row>
          <el-button plain disabled>朴素按钮</el-button>
          <el-button type="primary" plain disabled>主要按钮</el-button>
          <el-button type="success" plain disabled>成功按钮</el-button>
          <el-button type="info" plain disabled>信息按钮</el-button>
          <el-button type="warning" plain disabled>警告按钮</el-button>
          <el-button type="danger" plain disabled>危险按钮</el-button>
        </el-row>
        <p>文字按钮</p>
        <p>没有边框和背景色的按钮。</p>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
        <p>图标按钮</p>
        <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
        <p>设置icon属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用i标签即可，可以使用自定义图标。</p>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        <p>按钮组</p>
        <p>以按钮组的方式出现，常用于多项类似操作。</p>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
        <p>加载中</p>
        <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
        <p>要设置为 loading 状态，只要设置loading属性为true即可。</p>
        <el-button type="primary" :loading="true">加载中</el-button>
        <el-button type="primary" :loading="false">加载结束</el-button>
         <p>Attributes</p>
        <el-button type="primary"  @click="wblj('https://element.eleme.cn/#/zh-CN/component/button') ">去官网查看<i class="el-icon-arrow-right el-icon--right"></i></el-button>
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
