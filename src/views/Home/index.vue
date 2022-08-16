<template>
<div class='Home'>
   <HeaderBar isMore>
      <template #left> <i class="iconfont icon-gengduo"></i></template>
      <template #center><div class="Home-Text">首页</div></template>
    </HeaderBar>
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
  background-color: #fff;
  .icon-gengduo{
    color: #1baeae;
  }
  .Home-Text{
    font-size: 28px;
  }
}
</style>
