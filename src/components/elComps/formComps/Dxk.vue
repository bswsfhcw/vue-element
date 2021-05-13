<template>
    <el-container>
       <el-form ref="form" :model="form" label-width="180px">
        <el-row>
          <p>基础用法</p>
          <p>由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。</p>
        </el-row>
        <el-row>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-row>
        <el-row>
          <p>禁用状态</p>
          <p>单选框不可用的状态。</p>
        </el-row>
        <el-row>
          <el-radio disabled v-model="radio" label="禁用">备选项</el-radio>
          <el-radio disabled v-model="radio" label="选中且禁用">备选项</el-radio>
        </el-row>
        <el-row>
          <p>单选框组</p>
          <p>适用于在多个互斥的选项中选择的场景</p>
        </el-row>
        <el-row>
          <el-radio-group v-model="radios">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
          </el-radio-group>
        </el-row>
        <el-row>
          <p>按钮样式</p>
          <p>按钮样式的单选组合。</p>
        </el-row>
        <el-row>
          <div>
            <el-radio-group v-model="radio1">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio2" size="medium">
              <el-radio-button label="上海" ></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio3" size="small">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京" disabled ></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4" disabled size="mini">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
        </el-row>
      </el-form>
    </el-container>
</template>
<script>
export default {
  data () {
    return {
      checked: true,
      radio: '1',
      radios: 3,
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
