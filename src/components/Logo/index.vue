<template>
  <div class="Logo">
      <img
        src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png"
        alt="加载失败"
      />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  components: {},
  data () {
    return {
      Status: false
    }
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
.Logo {
  width: 100%;
  height: 100%;
  img {
    display: block;
    width: 230px;
    margin: 100px auto 10px;
  }
}
</style>
