<template>
  <div>
    <el-card ref="elc">
      <div style="padding: 2%">
        <el-row>
          <el-col style="text-align: center"><h3 style="margin: 0">Java学习</h3></el-col>
          <el-col style="text-align: right;padding-right: 10%"><h1 style="margin: 5px">java基础</h1></el-col>
          <el-col >
            <div class="elspan" :style="{ height: this.hh + 'px' }"><span v-html="this.str"></span></div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'StudyDetail',
  data () {
    return {
      hh: '',
      data1: '完成这篇教程有两种方式：可以直接在浏览器中编写代码，也可以在你电脑上搭建本地开发环境。\n方式一：在浏览器中编写代码\n这是上手最快的一种方式了！\n首先在新的浏览器选项卡中打开这个初始模板。你可以看到一个空的井字棋盘和 React 代码。我们接下来会在本教程中修改该 React 代码。\n如果你选择这种方式，就可以跳过方式二，直接从概览开始阅读教程啦。\n方式二：搭建本地开发环境\n这是完全可选的，本教程不强制要求！\n可选项：使用你喜欢的文本编辑器进行本地开发的步骤：\n虽然在本地搭建环境要费一些时间，但是你可以选择自己喜欢的编辑器来完成开发。以下是具体步骤：\n确保你安装了较新版本的 Node.js。\n按照 Create React App 安装指南创建一个新的项目',
      str: ''
    }
  },
  mounted () {
    this.getDomHeight()
  },
  methods: {
    getDomHeight () {
      if (document.body.clientWidth > document.body.clientHeight) {
        this.hh = document.body.clientHeight / 2 - 50
      } else {
        this.hh = document.body.clientHeight * 4 / 7
      }
      this.str = this.data1.replace(/\n/gm, '<br/>')
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-card{
    min-height: 50vh;
    max-height: 85vh;
  }
  .elspan{
    text-align:left;overflow-y:scroll;
  }
</style>
