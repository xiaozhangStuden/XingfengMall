<template>
<div class='Skeleton'><p class="Skeleton-P" :style="{width,height}"></p></div>
</template>
<script>
export default {
  name: 'Skeleton',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '20px'
    },
    color: {
      type: String,
      default: '#dadcdd'
    }
  }
}
</script>

<style lang='less' scoped>
.Skeleton{
  height: 100%;
  width: 100%;
}
.Skeleton-P{
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #eceff0;
  -webkit-animation: skeleton-blink 1.2s ease-in-out infinite;
  animation: skeleton-blink 1.2s ease-in-out infinite
}
@keyframes skeleton-blink {
  50% {
    opacity: .6
  }
}
@-webkit-keyframes skeleton-blink {
 50% {
    opacity: .6
  }
}
</style>
