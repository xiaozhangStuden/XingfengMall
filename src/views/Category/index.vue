<template>
<div class='Category'>
  <div>分类</div>
  <div @click="back">返回</div>
</div>
</template>

<script>

export default {
  name: 'Category',
  components: {},
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang='less' scoped>
.Category{
}
</style>
