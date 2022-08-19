<template>
  <div class="Swiper">
     <van-swipe class="my-swipe" v-if="SwiperList.length" :autoplay="3000" indicator-color="#a3b7c8">
      <van-swipe-item v-for="item in SwiperList" :key="item.carouselUrl">
        <img  :src="item.carouselUrl" />
      </van-swipe-item>
    </van-swipe>
    <van-skeleton v-else style="margin-top:15px"  title :row="3" />
  </div>
</template>

<script>
export default {
  props: {
    SwiperList: {
      type: Array,
      require: true,
      default () {
        return []
      }
    }
  },
  name: 'Swiper',
  components: {},
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 100%;
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
    animation: fadeIn 1s linear;
  }
}
/deep/ .van-swipe__indicators{
  bottom: 25px;
}
/deep/ .van-swipe__indicator {
  width: 15px;
  height: 15px;
}
@keyframes fadeIn {
0% { opacity: 0 }
100% { opacity: 1 }
}
</style>
