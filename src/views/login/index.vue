<template>
  <div class="login">
    <div class="login-box">
      <h1>系统登录</h1>
      <el-form
        :model="LoginForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="LoginForm.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="LoginForm.password"
            placeholder="请输入密码"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
          class="ipt"
            style="width: 200px"
            v-model="LoginForm.code"
            placeholder="请输入验证码"
          ></el-input>
          <img :src="images" @click="handleGetimg" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getImage } from "../../api/login";
export default {
  data() {
    return {
      // 登录表单
      LoginForm: {
        username: "admin",
        password: "1234",
        code: "",
      },
      images: "",
      // 登录表单验证
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 校验
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (!valid) return;
        this.handleLogin();
      });
    },
    // 登录
    async handleLogin() {
      // 调用vuex中登录接口
      let a = `username=${this.LoginForm.username}&password=${this.LoginForm.password}&code=${this.LoginForm.code}`;
      const token = await this.$store.dispatch("login", a);
      //   跳转主页
      if (!token) return;
      this.$message.success('登录成功')
      this.$router.push("/");
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 获取验证码图片
    async handleGetimg() {
      const response = await getImage();
      this.images = window.URL.createObjectURL(response.data);
      console.log(this.images);
    },
  },
  
  created() {
    this.handleGetimg();
  },
};
</script>
<style lang="scss" scoped>
.login {
  background-color: #fff;
  height: 100%;
  .login-box {
    height: 300px;
    width: 350px;
    box-shadow: 0 0 25px #cac6c6;
    border-radius: 10px;
    padding: 20px 35px;
    margin: 200px auto;
    h1 {
      text-align: center;
      font-size: 30px;
    }
  }
  img{
    vertical-align: middle;
    padding-left: 40px;
  }
  
}
</style>
