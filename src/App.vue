<template>
  <div id="app">
      <transition :name="transitionName()" >
        <keep-alive :include="['Home','Category,Swiper']">
          <router-view></router-view>
        </keep-alive>
      </transition>
      <Navbar v-if="hasOneOwnNavbar()"></Navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
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
      const blackList = ['/login', '/register']
      return !blackList.includes(path)
    }

  }
}
</script>
<style lage='less' scoped>
</style>
