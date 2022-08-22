<template>
  <div class="Goods-item">
    <transition name="fade" >
      <div v-if="Object.keys(GoodsItem).length > 0">
        <img :src="isExart(GoodsItem.goodsCoverImg)" alt="" />
        <div class="Goods-info">
          <div>{{ GoodsItem.goodsName }}</div>
          <span>￥{{ GoodsItem.sellingPrice }}</span>
        </div>
      </div>
      <div v-else>
        <Skeleton height="125px"></Skeleton>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Goods-item',
  props: {
    GoodsItem: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data () {
    return {
      LoadSuccessImg: false
    }
  },
  methods: {
    isExart (Src) {
      return /^https|http/.test(Src)
        ? Src
        : `http://backend-api-01.newbee.ltd/${Src}`
    }
  }
}
</script>

<style lang="less" scoped>
.Goods-item {
  display: inline-flex;
  width: 50%;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  img {
    display: block;
    width: 230px;
    margin: 0 auto;
    // .animation(fadeIn,1.5s,linear,.5s);
  }
  .Goods-info {
    box-sizing: border-box;
    padding: 0px 20px;
    div {
      white-space: pre-wrap;
      overflow: hidden;
      font-size: 28px;
      margin: 10px 0px;
      text-overflow: ellipsis;
    }
    span {
      color: @primary;
      font-size: 25px;
    }
  }
}
</style>
