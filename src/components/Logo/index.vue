<template>
  <div class="Logo">
    <div>
       <img
      @load="LoadImage"
        :src="url"
        alt="加载失败"
      />
    </div>
      <van-skeleton v-if="LoadStatus" title :row="3" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  components: {},
  data () {
    return {
      url: 'https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png',
      LoadStatus: true
    }
  },
  methods: {
    LoadImage () {
      this.LoadStatus = false
    }
  }
}
</script>

<style lang='less' scoped>
.Logo {
  width: 100%;
  img {
    display: block;
    width: 230px;
    margin: 100px auto 10px;
  }
}
</style>
