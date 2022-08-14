<template>
  <div class="Login">
    <HeaderBar isMore isBack>
      <template #center>
        <div class="Login-text">登录</div></template>
    </HeaderBar>
    <Logo></Logo>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue'
export default {
  name: 'Login',
  components: { LoginForm },
  data () {
    return {}
  },
  methods: {}
}
</script>s

<style lang='less' scoped>
.Login {
  height: 100%;
  .Login-text {
    font-size: 27px;
  }

}
</style>
