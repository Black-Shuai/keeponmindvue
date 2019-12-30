<template>
  <div>
      <div>
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
          <div v-for="(item,value) in image" :key="value">
            <el-menu-item @dblclick.native="getrow(item)">
              <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>
          </div>
        </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  name: 'sideBar.vue',
  data () {
    return {
      showBu: '展开',
      isCollapse: true, // 是否折叠
      image: [{
        name: '添加',
        icon: 'el-icon-camera'
      }, {
        name: '修改',
        icon: 'el-icon-picture'
      }, {
        name: '删除',
        icon: 'el-icon-help'
      }, {
        name: '设置',
        icon: 'el-icon-s-grid'
      }]
    }
  },
  methods: {
    getrow (row) {
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
