<template>
  <div id="app">
      <transition name='Side-fead' mode="out-in">
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
      return 'Side-fead'
    }
  }
}
</script>
<style>

</style>
