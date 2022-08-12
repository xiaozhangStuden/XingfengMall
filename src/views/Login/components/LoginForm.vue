<template>
  <div class="LoginForm">
    <van-form @submit="OnLogin">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' },{pattern ,message:'请输入正确的手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' },{pattern:pwdValide,message:'密码必须以字母开头，且长度为6-15字符之间'}]"
      />
      <!-- <van-field
        v-model="Code"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="large" type="primary" class="Send-Code">发送验证码</van-button>
        </template>
      </van-field> -->
      <div class="LoginModel">
        <SliderValide></SliderValide>
        <div class="Go-Register">立即注册</div>
      </div>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          class="Handel-Login"
          color="#1baeae"
          native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  components: {},
  data () {
    return {
      username: '',
      password: '',
      Code: '',
      pattern: /^((\+|00)86)?1((3[\d])|(4[5,6,7,9])|(5[0-3,5-9])|(6[5-7])|(7[0-8])|(8[\d])|(9[1,8,9]))\d{8}$/,
      pwdValide: /^[A-Za-z][A-Za-z0-9]{6,15}$/
    }
  },
  methods: {
    OnLogin () {}
  }
}
</script>

<style lang="less" scoped>
.LoginForm {
  padding: 30px 35px;
  .van-cell {
    font-size: 28px;
    padding: 20px 30px;
    height: 100px;
    .van-cell__title {
      align-items: center;
    }
  }
  .Handel-Login {
    height: 70px;
    font-size: 20px;
  }
  .LoginModel {
    padding: 30px 30px 20px 30px;
  }
  .Go-Register {
    font-size: 28px;
    color: #1989fa;
    margin-top: 30px;
  }
  .Send-Code {
    padding: 10px;
    font-size: 20px;
  }
}
</style>
