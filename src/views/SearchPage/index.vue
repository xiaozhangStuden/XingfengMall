<template>
<div class='SearchPage'>
  <Search></Search>
   <div class="Search-Zone">
      <div class="Search-Category">
        <div :class="{active:CurrentIndex === index}" v-for="(item,index) in CategoryList" :key="item" @click="getindex(index)">{{item}}</div>
      </div>
        <img class="empty"  src="https://s.yezgea02.com/1604041313083/kesrtd.png" alt="搜索">
    </div>
</div>
</template>

<script>

export default {
  name: 'SearchPage',
  components: {},
  data () {
    return {
      CategoryList: ['推荐', '新品', '价格'],
      CurrentIndex: 0
    }
  },
  methods: {
    getindex (index) {
      this.CurrentIndex = index
    }
  }
}
</script>

<style lang='less' scoped>
.SearchPage{
  height: 100%;
}
.Search-Zone{
  padding: 10px 35px;
  .Search-Category{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    border: 1px solid @primary;
    border-right: 0px;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: @primary;
      transition: all .5s;
      border-right: 1px solid @primary;
    }
    .active {
      color: #fff;
      background-color: @primary;
    }
  }
}
.empty{
  display: block;
  margin: 30px auto;
  width: 300px;
  height: 300px;
}
</style>
