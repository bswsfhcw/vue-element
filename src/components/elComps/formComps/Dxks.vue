<template>
    <el-container>
       <el-form ref="form" :model="form" label-width="180px">
        <el-row>
          <p>基础用法</p>
          <p>单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。</p>
        </el-row>
        <el-row>
          <el-checkbox v-model="checked">备选项</el-checkbox>
        </el-row>
        <el-row>
          <p>禁用状态</p>
          <p>多选框不可用的状态。</p>
        </el-row>
        <el-row>
          <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
          <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
        </el-row>
        <el-row>
          <p>多选框组</p>
          <p>适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。</p>
        </el-row>
        <el-row>
         <el-checkbox-group v-model="checkList">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
          <el-checkbox label="禁用" disabled></el-checkbox>
          <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>
        </el-row>
        <el-row>
          <p>按钮样式</p>
          <p>按钮样式的多选组合。</p>
        </el-row>
        <el-row>
          <div>
            <el-checkbox-group v-model="checkboxGroup1">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup2" size="medium">
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup3" size="small">
              <el-checkbox-button v-for="city in cities" :label="city" :disabled="city === '北京'" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
          <div style="margin-top: 20px">
            <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
              <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </el-row>
        <el-row>
          <p>indeterminate 状态</p>
          <p>indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果</p>
        </el-row>
        <el-row>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </el-row>
      </el-form>
    </el-container>
</template>
<script>
const cityOptions = ['上海', '北京', '广州', '深圳']
export default {
  data () {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ['选中且禁用', '复选框 A'],
      checkboxGroup1: ['上海'],
      checkboxGroup2: ['上海'],
      checkboxGroup3: ['上海'],
      checkboxGroup4: ['上海'],
      checkAll: false,
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
