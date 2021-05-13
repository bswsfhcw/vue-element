<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-row  :gutter="20">
        <el-col :span="8">
          <el-form-item label="时间范围:">
            <el-date-picker
              v-model="rqfw"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-button type="primary" @click="ch()">查询</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="6" :offset="6">
          <el-form-item>
            最近  <el-input-number v-model="paramsSsqCx.lastqs" :min="0" label="描述文字"></el-input-number>  期
            <el-button type="primary" @click="pcSsq()">重爬</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    <el-progress v-show="percentage != '0'" :text-inside="true" :stroke-width="26" :percentage="percentage"></el-progress>
    </el-form>
    <el-row style="height:600px;overflow:auto">
      <el-row>
          <el-col :span="16">
            <div style="height: 400px;width: 100%" id="hhtj1"></div>
          </el-col>
          <el-col :span="8">
            <div style="height: 400px;width: 100%" id="lhtj1"></div>
          </el-col>
        </el-row>
      <el-row  :gutter="20">
        <el-col :span="12">
          <el-table
            :data="Ssqs"
            height="500px"
            style="width: 100%;overflow:auto">
            <el-table-column
              prop="kjrq"
              label="开奖日期"
              width="120">
            </el-table-column>
            <el-table-column
              prop="qh"
              label="期号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="zjhm"
              label="中奖号码">
              <template slot-scope="scope">
                <el-button type="danger"  circle>{{scope.row.hh1}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh2}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh3}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh4}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh5}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh6}}</el-button>
                <el-button type="primary" circle>{{scope.row.lh}}</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="width:50%">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="paramsSsqCx.pageNum"
            :page-sizes="[20,100, 200, 300, 400]"
            :page-size="paramsSsqCx.pageSize"
            layout="total, sizes, prev, pager, next"
            :total="paramsSsqCx.records"
            >
            </el-pagination>
          </div>
        </el-col>
        <el-col :span="12">
          <el-table
            :data="lstjs"
            height="400px"
            style="width: 100%;overflow:auto">
            <el-table-column
              prop="zhfs"
              label="组合方式"
              width="220">
              <template slot-scope="scope">
                <span v-if="scope.row.lx=='hdld'">红号最多+蓝号最多（历史）</span>
                <span v-else-if="scope.row.lx=='hsls'">红号最少+蓝号最少（历史）</span>
                <span v-else-if="scope.row.lx=='hdls'">红号最多+蓝号最少（历史）</span>
                <span v-else-if="scope.row.lx=='hsld'">红号最少+蓝号最多（历史）</span>
                <span v-else>其他</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="zjhm"
              label="号码">
              <template slot-scope="scope">
                <el-button type="danger"  circle>{{scope.row.hh1}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh2}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh3}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh4}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh5}}</el-button>
                <el-button type="danger"  circle>{{scope.row.hh6}}</el-button>
                <el-button type="primary" circle>{{scope.row.lh}}</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>
<script>
import apiSsq from '../../api/ssq'
const echarts = require('echarts')
const hhs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
  '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33']
const lhs = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']
const hhsl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const lhsl = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
export default {
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一年',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近两年',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365 * 2)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三年',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365 * 3)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近四年',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365 * 4)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '全部历史',
          onClick (picker) {
            const end = new Date()
            const start = new Date('2003-02-12')
            start.setTime(start.getTime())
            picker.$emit('pick', [start, end])
          }
        }]
      },
      percentage: 0,
      rqfw: ['', ''],
      paramsSsqCx: { // 查询用
        ksrq: '',
        jsrq: '',
        pageNum: 1,
        pageSize: 20,
        totalPages: 1,
        records: 0,
        lastqs: 100
      },
      Ssqs: [], // 直接返回的列表
      lstjs: [], // 直接返回的列表
      chart1: {
        zt: false,
        hhs: hhs,
        lhs: lhs,
        hhsl: hhsl,
        lhsl: lhsl
      },
      timer: ''
    }
  },
  methods: {
    handleSizeChange (val) {
      this.paramsSsqCx.pageSize = val
      this.paramsSsqCx.pageNum = 1
      this.getSsqPageList()
      this.lstj()
    },
    handleCurrentChange (val) {
      this.paramsSsqCx.pageNum = val
    },
    ch () {
      var that = this
      that.paramsSsqCx.pageNum = 1
      that.paramsSsqCx.totalPages = 1
      that.paramsSsqCx.records = 0
      that.Ssqs = []
      that.lstjs = []
      that.getSsqPageList()
      that.chart1.hhs = hhs
      that.chart1.lhs = lhs
      that.chart1.hhsl = hhsl
      that.chart1.lhsl = lhsl
      that.chart1.zt = !that.chart1.zt
      that.lstj()
    },
    getSsqPageList () {
      var that = this
      console.log('that.rqfw：' + that.rqfw)
      that.loading = true
      that.loadingText = '加载中'
      that.paramsSsqCx.ksrq = that.rqfw[0]
      that.paramsSsqCx.jsrq = that.rqfw[1]
      console.log('paramsSsqCx:' + JSON.stringify(that.paramsSsqCx))
      apiSsq.getSsqPageList(that.paramsSsqCx).then((res) => {
        let data = res.data
        if (data.code === 'T') { // 获取文件模板成功
          that.loading = false
          // console.log(data.data.rows)
          that.Ssqs = data.data.rows
          that.paramsSsqCx.records = data.data.records
          that.paramsSsqCx.totalPages = data.data.totalPages
        } else { // 获取文件模板失败
          that.loading = false
        }
      })
    },
    pcSsq () {
      var that = this
      if (that.percentage > 0 && that.percentage < 100) {
        that.$message({
          message: '上传爬取未结束',
          type: 'warning'
        })
        return
      }
      console.log('that.rqfw：' + that.rqfw)
      that.percentage = 1
      that.loading = true
      that.loadingText = '加载中'
      that.paramsSsqCx.ksrq = that.rqfw[0]
      that.paramsSsqCx.jsrq = that.rqfw[1]
      console.log('pcSsq:' + JSON.stringify(that.paramsSsqCx))
      apiSsq.pcSsq(that.paramsSsqCx).then((res) => {
        that.percentage = 100
        let data = res.data
        if (data.code === 'T') { // 获取文件模板成功
          that.loading = false
          // console.log(data.data.rows)
          this.$message({
            message: '实际重新爬取：' + data.data.count + ' 期',
            type: 'success'
          })
          that.ch()
        } else { // 获取文件模板失败
          that.loading = false
        }
      })
      that.timer = setInterval(() => {
        that.getPcjd()
      }, 10)
    },
    getPcjd () {
      var that = this
      console.log('that.rqfw：' + that.rqfw)
      that.paramsSsqCx.ksrq = that.rqfw[0]
      that.paramsSsqCx.jsrq = that.rqfw[1]
      console.log('getPcjd:' + JSON.stringify(that.paramsSsqCx))
      apiSsq.getPcjd(that.paramsSsqCx).then((res) => {
        let data = res.data
        if (data.code === 'T') { // 获取文件模板成功
          that.percentage = data.data === 0 ? 1 : data.data
          if (that.percentage === 100) {
            // clearInterval(that.timer)
          }
        } else {
          that.percentage = 100
        }
      })
    },
    lstj () {
      var that = this
      console.log('that.rqfw：' + that.rqfw)
      that.loading = true
      that.loadingText = '加载中'
      that.paramsSsqCx.ksrq = that.rqfw[0]
      that.paramsSsqCx.jsrq = that.rqfw[1]
      console.log('paramsSsqCx:' + JSON.stringify(that.paramsSsqCx))
      apiSsq.lstj(that.paramsSsqCx).then((res) => {
        let data = res.data
        if (data.code === 'T') { // 获取文件模板成功
          that.loading = false
          // console.log(data.data.rows)
          that.lstjs = data.data.lszh
          that.chart1.hhs = data.data.chart1.hhs
          that.chart1.lhs = data.data.chart1.lhs
          that.chart1.hhsl = data.data.chart1.hhsl
          that.chart1.lhsl = data.data.chart1.lhsl
          that.chart1.zt = !that.chart1.zt
        } else { // 获取文件模板失败
          that.loading = false
        }
      })
    },
    initChartHhtj1 () {
      var that = this
      // 基于准备好的dom，初始化echarts实例
      var myChartHhtj1 = echarts.init(document.getElementById('hhtj1'))
      var optionHhtj1 = {
        title: {
          text: '红号分布',
          subtext: '数据仅供参考',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          name: '号码',
          type: 'category',
          data: that.chart1.hhs
        },
        yAxis: {
          name: '出现次数',
          type: 'value'
        },
        series: [{
          data: that.chart1.hhsl,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChartHhtj1.setOption(optionHhtj1)
    },
    initChartLhtj1 () {
      var that = this
      // 基于准备好的dom，初始化echarts实例
      var myChartLhtj1 = echarts.init(document.getElementById('lhtj1'))
      var optionLhtj1 = {
        title: {
          text: '蓝号分布',
          subtext: '数据仅供参考',
          left: 'center'
        },
        xAxis: {
          name: '号码',
          type: 'category',
          data: that.chart1.lhs
        },
        yAxis: {
          name: '出现次数',
          type: 'value'
        },
        series: [{
          data: that.chart1.lhsl,
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChartLhtj1.setOption(optionLhtj1)
    }
  },
  watch: {
    'paramsSsqCx.pageNum': function () {
      console.log('watch pageNum:' + this.paramsSsqCx.pageNum)
      this.getSsqPageList()
      this.lstj()
    },
    'chart1.zt': function () {
      this.initChartHhtj1()
      this.initChartLhtj1()
    }
  },
  mounted () {
    this.ch()
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
<style>
</style>
