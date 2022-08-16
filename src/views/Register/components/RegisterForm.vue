<template>
<div class='RegisterForm'>
  <van-form @submit="OnRegister" @failed="onFailed">
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
    v-model="affirmPassword"
    type="affirmPassword"
    name="affirmPassword"
    label="确认密码"
    placeholder="确认密码"
    :rules="[{ required: true, message: '请填写确认密码' },{validator:valideAffrimPwd ,message:'两次密码不一致'}]"
  />

  <div class="Register-Model">
    <SliderValide v-model="SilderStatus"></SliderValide>
    <div class="Go-Login" :style="{marginTop:'15px'}" @click="$router.push('/login')">已有账号登录</div>
  </div>
  <div style="margin: 16px;">
    <van-button round block type="info" class="handel-Reg" native-type="submit">注册</van-button>
  </div>
</van-form>
</div>
</template>

<script>
import { Toast } from 'vant'
import { UserRegister } from '@/api/User'
export default {
  name: 'RegisterForm',
  components: {},
  data () {
    return {
      username: '',
      password: '',
      affirmPassword: '',
      SilderStatus: false
    }
  },
  methods: {
    async OnRegister () {
      if (!this.SilderStatus) return Toast.fail('请先进行验证')

      const res = await UserRegister()
    },
    valideAffrimPwd (value) {
      if (this.password !== value) {
        return true
      } else {
        console.log(2222)
      }
    },
    onFailed (errorInfo) {
      console.log('failed', errorInfo)
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
    width: 30%;
    font-size: 28px;
    color: #1989fa;
  }
}
</style>
