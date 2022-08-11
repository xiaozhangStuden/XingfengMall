<template>
<div class='Home'>首页
  <button @click="GoCategory">跳转</button>
</div>

</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {

    }
  },
  methods: {
    GoCategory () {
      this.$router.push('/category')
    }
  }
}
</script>

<style lang='less' scoped>
.Home{
  height: 100%;
  background-color: #CCF;
}
</style>
