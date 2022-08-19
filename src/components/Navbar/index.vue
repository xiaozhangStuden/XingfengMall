<template>
<div class='Navbar'>
  <div class="flex-Home" @click="$router.push('/home')"  :class="{'active':$route.path === '/home'}">
    <div class="Home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </div>
  </div>
  <div class="flex-Category" @click="$router.push('/category')" :class="{'active':$route.path === '/category'}">
    <div class="Category">
      <i class="iconfont icon-fenlei"></i>
      <span>分类</span>
    </div>
  </div>
  <div class="flex-ShopCart" @click="$router.push('/shopcart')"  :class="{'active':$route.path === '/shopcart'}">
    <div class="ShopCart">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
  </div>
  <div class="flex-Profile" @click="$router.push('/profile')"  :class="{'active':$route.path === '/profile'}">
    <div class="Profile">
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Navbar',
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
.Navbar{
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  z-index:10;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #f5f6f7 ;
  box-shadow: 5px 5px 5px #888888;
  background-color: #fff;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  span{
    margin-top: 10px;
    font-size: 25px;
  }
  i {
    margin-top: 5px;
    font-size: 40px;
  }
}
.active{
  color: #1baeae;
}
</style>
