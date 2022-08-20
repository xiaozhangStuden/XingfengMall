<template>
<div class='Search'>
   <HeaderBar class="base-header">
      <template #left> <i class="iconfont icon-gengduo"></i></template>
      <template #center>
        <div class="XinFeng-Search">
          <div class="Search-model">
            <div class="Search-title">
              <p>新蜂商城</p>
            </div>
            <div class="Serach-input">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" placeholder="搜索"/>
            </div>
          </div>
        </div>
      </template>
      <template #right><i class="iconfont icon-wode"></i></template>
    </HeaderBar>
</div>
</template>

<script>

export default {
  name: 'index',
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
</style>
