<template>
<div class='Register'>
    <HeaderBar isMore isBack>
      <template #center><div class="Login-text">注册</div></template>
    </HeaderBar>
    <Logo></Logo>
    <RegisterForm></RegisterForm>
</div>
</template>

<script>
import RegisterForm from './components/RegisterForm.vue'
export default {
  name: 'Register',
  components: { RegisterForm },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
