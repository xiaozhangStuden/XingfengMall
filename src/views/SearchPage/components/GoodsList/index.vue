<template>
  <div class="GoodsList">
    <div class="GoodsItem" v-if="item.goodsId">
    <img
      :src="'http://backend-api-01.newbee.ltd/' + item.goodsCoverImg"
      alt=""
    />
    <div class="GoodsBaseinfo">
      <p>{{ item.goodsName }}</p>
      <span>{{ item.goodsIntro }}</span>
      <div>{{ item.sellingPrice }}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  components: {},
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.GoodsList{
.GoodsItem {
  display: flex;
  width: 100%;
  height: 250px;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdcdc;

  .GoodsBaseinfo {
    width: 100%;
    padding-left: 30px;
    overflow: hidden;
    img {
      margin-right: 50px;
    }
    p {
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
}

</style>
