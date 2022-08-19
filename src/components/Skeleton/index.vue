<template>
<div class='Skeleton'>
  <p class="Skeleton-P">
  </p>
</div>
</template>

<script>

export default {
  name: 'Skeleton',
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='less' scoped>
.Skeleton-P{
  width: 500px;
  height: 30px;
  border-radius: 5px;
  background-color: #dadcdd;
  animation: breathind 1s linear 1s infinite;
}
@keyframes breathind {
  0%{
    background-color: #f2f3f5;
  }
  100%{
    background-color: #e3e4e6;
  }
}
</style>
