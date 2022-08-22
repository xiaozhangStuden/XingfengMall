<template>
<div class='Button'>
  <button class="btn" :style="{backgroundColor:Bgc,borderRadius:radius ? '20px':'' }" @click="$emit('Search')">{{context}}</button>
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
.Button{
  padding-right: 30px;
}
button{
  width: 100px;
  height: 55px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
}
</style>
