<template>
  <div class="Search">
    <HeaderBar isBack class="base-header">
      <template #center>
        <div class="Search-Box">
          <i class="iconfont icon-sousuo"></i>
          <input v-focus @input="SearchResult" v-model="SearchValue" type="text" name="Goods" placeholder="搜索">
          <i v-show='SearchValue' @click.stop="SearchValue = ''" class="iconfont icon-cuowu Clear"></i>
        </div>
      </template>
          <template #right>
            <div class="Search-Btn" @click.stop="$emit('handelSearch')">搜索</div>
        </template>
    </HeaderBar>
  </div>
</template>

<script>
import { debounce } from '@/utils/debounce'
export default {
  name: 'Search',
  data () {
    return {
      SearchValue: ''
    }
  },
  methods: {
    SearchResult: debounce(function () { this.$emit('WatchValue', this.SearchValue) }, 200)
  }

}
</script>

<style lang="less" scoped>
.Search-Box{
  position: relative;
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
  .Clear{
    position: absolute;
    right: 10px;
    font-size: 30px !important;
  }

}

</style>
