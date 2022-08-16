<template>
  <div id="app">
      <transition :name="transitionName()" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
      <Navbar v-if="hasOneOwnNavbar()"></Navbar>
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
    },
    hasOneOwnNavbar () {
      const path = this.$route.path
      const blackList = ['/login', '/login']
      return !blackList.includes(path)
    }
  }
}
</script>
<style lage='less' scoped>
</style>
