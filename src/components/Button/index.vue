<template>
<div class='Button'>
  <button class="btn" :style="{backgroundColor:Bgc,borderRadius:radius ? '10px':'' }">{{context}}</button>
</div>
</template>

<script>

export default {
  name: 'MyButton',
  props: {
    radius: {
      type: Boolean,
      default: false
    },
    Bgc: {
      type: String,
      default: '#1baeae'
    },
    context: {
      type: String || Number,
      default: '按钮'
    }
  }
}
</script>

<style lang='less' scoped>
button{
  width: 90px;
  height: 60px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 25px;
}
</style>
