<template>
  <div id="app">
      <transition :name='transitionName()' mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
  </div>
</template>

<script>
export default {
  methods: {
    transitionName () {
      return this.$store.getters.AnimationName
    }
  }
}
</script>
<style lage='less' scoped>
</style>
