<template>
<div class='RegisterForm'>
  <van-form @submit="OnRegister">
  <van-field
    v-model="username"
    name="用户名"
    label="用户名"
    placeholder="用户名/手机号"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="密码"
    label="确认密码"
    placeholder="确认密码"
    :rules="[{ required: true, message: '请填写确认密码' }]"
  />
  <div class="Register-Model">
    <div class="Go-Login" @click="$router.push('/login')">去登录</div>
  </div>
  <div style="margin: 16px;">
    <van-button round block type="info" class="handel-Reg" native-type="submit">注册</van-button>
  </div>
</van-form>
</div>
</template>

<script>

export default {
  name: 'RegisterForm',
  components: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    OnRegister () {

    }
  }
}
</script>

<style lang='less' scoped>
@import '../../../styles/variable.less';
.RegisterForm{
    padding: 30px 35px;
 .van-cell {
    font-size: 28px;
    padding: 20px 30px;
    height: 100px;
    .van-cell__title {
      align-items: center;
    }
  }
  .handel-Reg{
    height: 70px;
    font-size: 20px;
    border: none;
    background-color: @primary;
  }
  .Register-Model{
     padding: 30px 30px 20px 30px;
  }
  .Go-Login {
    width: 100px;
    font-size: 28px;
    color: #1989fa;
  }
}
</style>
