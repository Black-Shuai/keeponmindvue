<template>
  <div>
    <el-card ref="elc">
      <el-table
        :height="hh"
        @row-click="openDetail"
        :data="tableData">
        <el-table-column
          prop="date"
          label="编写日期">
        </el-table-column>
        <el-table-column
          prop="title"
          label="编写题目">
        </el-table-column>
        <el-table-column
          prop="fTiltle"
          label="副标题">
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Study',
  data () {
    return {
      hh: 0,
      tableData: [{
        date: '2016-05-03',
        title: '王小虎',
        fTiltle: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        title: '王小虎',
        fTiltle: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        title: '王小虎',
        fTiltle: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        title: '王小虎',
        fTiltle: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  created () {
    this.hh = window.innerHeight / 2 + 80
  },
  mounted () {
    this.getDomHeight()
  },
  methods: {
    getDomHeight () {
      // this.hh = document.body.clientHeight / 2 - 50
      console.log(this.hh)
    },
    openDetail (val) {
      this.$router.push('/StudyDetail')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-card{
    min-height: 65vh;
    max-height: 65vh;
  }
</style>
