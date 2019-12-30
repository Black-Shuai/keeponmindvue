<template>
  <div id="app" class="table_c">
    <vue-particles
      :particleSize="4"
      hoverMode="grab"
      clickMode="push"
      class="truePosition"
    ></vue-particles>
    <el-form ref="loginFormRef" :rules="loginFormRules" label-position="top" :model="loginForm">
      <h2 class="title">欢迎登录</h2>
      <el-form-item prop="username">
        <label>用户名：</label>
        <el-input type="text" placeholder="请输入用户名" v-model="loginForm.username"/>
      </el-form-item>
      <el-form-item prop="password">
        <label>密码：</label>
        <el-input type="password" placeholder="请输入密码" v-model="loginForm.password"/>
      </el-form-item>
      <el-form-item class="button">
        <el-button type="primary" @click="login">立即登录</el-button>
        <el-button type="info" @click="resetLoginForm">取消登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
import {login} from '../api/apiLogin.js'// 引用api文档
Vue.use(VueParticles)
export default {
  name: 'Login',
  data () {
    return {
      // 表单的数据绑定对象
      loginForm: {
        username: 'student',
        password: '123456'
      },
      // 表单的验证规则对象
      loginFormRules: {
        // 验证用户名
        username: [{required: true, message: '请输入账户', trigger: 'blur'}],
        // 验证密码
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  mounted () {},
  methods: {
    // 登录跳转
    login () {
      login(this.loginForm).then((response) => {
        this.$router.push('/home')
      })
    },
    // 重置表单
    resetLoginForm () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
  .table_c {
    width: 100%;
    height: 100%;
    /*min-width: 100vh;*/
    min-height: 100vh;
    background: url("../assets/image/moon.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  #app {
    overflow-y: hidden;
  }

  .el-form {
    background-color: #d5d5d5;
    text-align: left;
    width: 350px;
    height: auto;
    margin: 100px auto;
    border: 2px solid #DCDFE6;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 0 0 25px #DCDFE6;
    width: 80%;
    top: 50%;
    max-width: 350px;
  }

  .title {
    text-align: center;
  }

  .button {
    text-align: center;
  }

  /*将特效放于下一层，防止其他元素被特效挤到下面*/
  .truePosition {
    position: fixed;
    top: 0;
    width: 100%;
    min-width: 100vh;
    height: 100%;
    min-height: 100vh;
  }
</style>
