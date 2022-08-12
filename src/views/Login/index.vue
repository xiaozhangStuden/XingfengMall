<template>
  <div class="Login">
    <HeaderBar isMore>
      <template #center><div class="Login-text">登录</div></template>
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
</script>

<style lang='less' scoped>
.Login {
  .Login-text {
    font-size: 27px;
  }

}
</style>
