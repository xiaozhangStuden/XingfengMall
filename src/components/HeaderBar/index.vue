<template>
  <div class="HeaderBar">
    <div class="Header-left">
      <i class="iconfont icon-fanhui ScopedSize" @click="Back" v-if="isBack"></i>
      <slot v-else name="left" class="ScopedSize"></slot>
    </div>
    <div class="Header-Center">
       <slot name="center" class="ScopedSize"></slot>
    </div>
    <div class="Header-Right">
     <i class="nbicon nbmore ScopedSize" v-if="isMore" ></i>
      <slot name="right" class="ScopedSize" v-else></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  components: {},
  props: {
    // 是否需要返回
    isBack: {
      type: Boolean,
      default: false
    },
    isMore: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  methods: {
    Back () {
      this.$store.commit('UpdateName', true)
      this.$nextTick(() => {
        this.$router.go(-1)
      })
    }
  }
}
</script>

<style lang='less' scoped>
.ScopedSize {
  font-size: 25px;
}
.HeaderBar {
  display: flex;
  height: 90px;
  box-sizing: border-box;
  padding: 0px 10px;
  align-items: center;
  .Header-Center {
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .Header-left,
  .Header-Right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 100%;
  }
}
</style>
