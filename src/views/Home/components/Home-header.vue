<template>
<div class='Goods-Column'>{{message}}</div>
</template>

<script>

export default {
  name: 'Goods-Column',
  props: {
    message: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='less' scoped>
.Goods-Column{
    width: 100%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: @primary;
    font-size: 30px;
    background-color: #f9f9f9;
  }
</style>
