<template>
  <div id="app">
      <transition :name="transitionName()" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <Navbar></Navbar>
  </div>
</template>

<script>
export default {
  methods: {
    transitionName () {
      if (this.$route.meta.Animation) {
        return this.$store.getters.AnimationName
      } else {
        return ''
      }
    }
  }
}
</script>
<style lage='less' scoped>
</style>
