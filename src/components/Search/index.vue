<template>
  <div class="Search">
    <HeaderBar isBack class="base-header">
      <template #center>
        <div class="Search-Box">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" name="Goods" placeholder="搜索">
        </div>
      </template>
      <template #right>
        <MyButton radius context='搜索'></MyButton>
      </template>
    </HeaderBar>
  </div>
</template>

<script>
export default {
  name: 'Search',
  components: {},
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.Search-Box{
  display: flex;
  align-items: center;
  width: 100%;
  height: 60%;
  background-color: #f7f7f7;
  border-radius: 50px;
  padding-left: 30px;
  i{
    margin-top: 4px;
    margin-right: 15px;
  }
  input{
    width: 100%;
    height: 100%;
    font-size: 25px;
    background-color: transparent;
  }
}

</style>
