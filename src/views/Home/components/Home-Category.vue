<template>
  <div class="Home-Category">
    <div class="Category-Item" v-for="item in CategoryList" :key="item.categoryId">
      <a>
        <img :src="item.imgUrl" alt="">
        <span>{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home-Category',
  components: {},
  props: {
    CategoryList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang='less' scoped>
.Home-Category{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .Category-Item{
    width: 20%;
    margin-top: 10px;
    text-align: center;
    a{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      img{
        width: 80px;
        height: 80px;
        margin: 10px auto 20px;
      }
      span{
        font-size: 28px;
      }
    }
  }
}
</style>
