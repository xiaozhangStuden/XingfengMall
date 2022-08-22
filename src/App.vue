<template>
  <div id="app">
      <transition :name="transitionName" >
        <keep-alive :include="['Home','Category,Swiper']">
          <router-view></router-view>
        </keep-alive>
      </transition>
      <Navbar v-if="hasOneOwnNavbar()"></Navbar>
  </div>
</template>

<script>
import router from './router'
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  created () {
    router.beforeEach((to, from, next) => {
      console.log(to)
      if (to.meta.PageLevel > from.meta.PageLevel) {
        this.transitionName = 'Side-fead'
      } else if (to.meta.PageLevel < from.meta.PageLevel) {
        this.transitionName = 'Side-fead-right'
      } else {
        this.transitionName = ''
      }
      next()
    })
  },
  methods: {
    hasOneOwnNavbar () {
      return !(this.$route.meta.PageLevel === 2)
    }
  }
}

</script>
