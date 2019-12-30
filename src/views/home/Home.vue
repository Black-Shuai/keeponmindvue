<template>
  <div class="table_c">
    <vue-particles
      :particleSize="4"
      hoverMode="grab"
      class="truePosition"
    ></vue-particles>
    <el-container style="padding: 1%">
      <el-header style="height: auto;padding: 0">
        <el-carousel :interval="4000" type="card" :height="carouselHeight+'px'">
          <el-carousel-item v-for="(item,value) in image" :key="value">
              <el-image
                style="height: 100%;width: 100%"
                :src="item.url"
                fit="cover"></el-image>
          </el-carousel-item>
        </el-carousel>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">学习经历</el-menu-item>
          <el-menu-item index="2">日常生活</el-menu-item>
          <el-menu-item index="3">工作历程</el-menu-item>
          <el-menu-item index="4">过往照片</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
<!--        <el-aside style="max-width: 145px;z-index: 0;width: unset">-->
<!--          <side-bar></side-bar>-->
<!--        </el-aside>-->
        <el-main style="z-index: 0;padding: 0">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideBar from './components/sideBar.vue'
export default {
  name: 'Home',
  components: {
    sideBar
  },
  data () {
    return {
      carouselHeight: '',
      isCollapse: true,
      activeIndex: '1',
      activeIndex2: '1',
      image: [{
        name: '管理员',
        icon: 'el-icon-camera',
        url: require('../../assets/image/admin.jpg')
      }, {
        name: '管理员',
        icon: 'el-icon-picture',
        url: require('../../assets/image/bg.jpg')
      }, {
        name: '管理员',
        icon: 'el-icon-help',
        url: require('../../assets/image/moon.jpg')
      }, {
        name: '管理员',
        icon: 'el-icon-s-grid',
        url: require('../../assets/image/student.jpg')
      }, {
        name: '管理员',
        icon: 'el-icon-camera',
        url: require('../../assets/image/teacher.jpg')
      }]
    }
  },
  watch: {},
  mounted () {
    this.getHeight()
  },
  methods: {
    // 初始化走马灯高度
    getHeight () {
      if (document.body.clientWidth > document.body.clientHeight) {
        this.carouselHeight = document.body.clientHeight / 5
      } else {
        this.carouselHeight = document.body.clientHeight / 8
      }
    },
    handleSelect (key, keyPath) {
      if (key === 1) {
        this.$router.push('/study')
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-menu-item{padding: 0 4%}
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .table_c {
    width: 100%;
    height: 90%;
    /*min-width: 100vh;*/
    min-height: 100vh;
    background: url("../../assets/image/moon.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }
  /*将特效放于下一层，防止其他元素被特效挤到下面*/
  .truePosition {
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 100vh;
    height: 100%;
    min-height: 95vh;
  }
  .container {
    border: 4px solid red;
    overflow: hidden;
  }
  .left {
    width: 100px;
    height: 400px;
    background-color: #482;
    float: left;
  }
  .right {
    width: 200px;
    height: 400px;
    background-color: #d96;
    float: right;
  }

  .footer {
    width: 100%;
    height: 100px;
    background-color: #129;
  }
  .container::after {
    content: '';
    display: block;
    clear: both;
  }
</style>
