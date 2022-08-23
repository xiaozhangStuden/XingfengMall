<template>
  <div class="SearchPage">
    <Search @WatchValue="SearchGoods" @handelSearch='handelSearch'></Search>
    <div class="Search-Zone" v-if="!SearchResutList.length">
      <img class="empty" src="https://s.yezgea02.com/1604041313083/kesrtd.png" alt="搜索"/>
    </div>
    <div v-else class="result-List">
      <ul @click="handelSearch">
        <li v-for="item in SearchResutList" :key="item.goodsId">
          <i class="iconfont icon-sousuo"></i>
          <span>{{item.goodsName}}</span>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SearchGoodsList } from '@/api/Goods'
import { mapState } from 'vuex'
export default {
  name: 'SearchPage',
  data () {
    return {
      CategoryList: ['推荐', '新品', '价格'],
      CurrentIndex: 0,
      SearchValue: ''
    }
  },
  computed: {
    ...mapState('SearchGoods', ['SearchResutList'])
  },
  methods: {
    getindex (index) {
      this.CurrentIndex = index
    },
    async SearchGoods (keyword) {
      if (keyword) {
        try {
          const { data } = await SearchGoodsList(keyword)
          this.$store.commit('SearchGoods/loadSearchList', data.list)
        } catch (error) {

        }
      }
    },
    handelSearch () {
      this.$router.push('/search/list')
    }
  }
}
</script>

<style lang="less" scoped>
.SearchPage {
  height: 100%;
  width: 100%;
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
.result-List{
  width: 100%;
  height: 500px;

  li{
    display: flex;
    height: 60px;
    width: 100%;
    line-height: 60px;
    font-size: 25px;
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 15px;
    border-bottom: 1px solid rgb(238, 235, 235);
    i{
      padding: 0px 15px;
    }
    &:hover{
      background-color: rgb(240, 238, 238);
    }
  }

}
}
.empty {
  display: block;
  margin: 30px auto;
  width: 300px;
  height: 300px;
}
</style>
