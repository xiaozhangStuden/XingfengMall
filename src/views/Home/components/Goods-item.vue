<template>
<div class='Goods-item' v-if="Object.keys(GoodsItem)">
  <img :src="GoodsItem.goodsCoverImg" alt="">
  <div class="Goods-info">
  <div>{{GoodsItem.goodsName}}</div>
  <span>￥{{GoodsItem.sellingPrice}}</span>
  </div>
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
.Goods-item{
  display: inline-flex;
  width: 50%;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
  img{
    width: 230px;
    margin: 0 auto;
  }
  .Goods-info{
    box-sizing: border-box;
    padding: 0px 20px;
    div{
    white-space: pre-wrap;
    overflow: hidden;
    font-size: 28px;
    margin : 10px 0px;
    text-overflow: ellipsis;
    }
    span{
      color: @primary;
      font-size: 25px;
    }
  }
}
</style>
