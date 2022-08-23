<template>
<div class="SearchGoodsist">
  <Search></Search>
     <div class="Search-Zone">
      <div class="Search-Category">
        <div :class="{ active: CurrentIndex === index }"  v-for="(item, index) in CategoryList" :key="item" @click="getindex(index)" > {{ item }} </div>
      </div>
    </div>
    <GoodsList v-for="item in SearchResutList" :key="item.goodsId" :item='item' ></GoodsList>
</div>
</template>

<script>
import { mapState } from 'vuex'
import GoodsList from '../GoodsList/index.vue'
export default {
  name: 'SearchGoodsList',
  components: { GoodsList },
  data () {
    return {
      CategoryList: ['推荐', '新品', '价格'],
      CurrentIndex: 0
    }
  },
  computed: {
    ...mapState('SearchGoods', ['SearchResutList'])
  },
  methods: {
    getindex (index) {
      this.CurrentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.Search-Zone {
  padding: 10px 35px;
  .Search-Category {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 60px;
    border: 1px solid @primary;
    border-right: 0px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: @primary;
      font-size: 28px;
      border-right: 1px solid @primary;
    }
    .active {
      color: #fff;
      transition: all 0.5s;
      background-color: @primary;
    }
  }
}
</style>
