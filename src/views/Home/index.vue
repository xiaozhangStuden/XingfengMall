<template>
<div class='Home'>
   <HeaderBar class="base-header">
      <template #left> <i class="iconfont icon-gengduo"></i></template>
      <template #center>
        <div class="XinFeng-Search">
          <div class="Search-model">
            <div class="Search-title">
              <p>新蜂商城</p>
            </div>
            <div class="Serach-input">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" placeholder="搜索">
            </div>
          </div>
        </div>
      </template>
      <template #right><i class="iconfont icon-wode"></i></template>
    </HeaderBar>
    <Swiper class="Swiper">

    </Swiper>
</div>

</template>

<script>

export default {
  name: 'Home',
  components: {},
  data () {
    return {

    }
  },
  methods: {
    GoCategory () {
      this.$router.push('/category')
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/variable.less';
.Home{
  background-color: #fff;
  .icon-gengduo,.icon-wode{
    color: #fff;

  }
  .Home-Text{
    font-size: 28px;
  }
  .base-header{
    background-color: @primary;
  }
  .XinFeng-Search{
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    .Search-model{
      display: flex;
      width: 100%;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.7);
      padding: 0px 10px;
      align-items: center;
      margin: 15px 0px;
      .Search-title{
        text-align: center;
        padding: 0px 15px;
        border-right: 1px solid #7e7e7e;
      }
      .Serach-input{
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        align-items: center;

        i{
          margin-left: 15px;
        }
        input{
          width: 100%;
          font-size: 25px;
          height: 100%;
          margin-left: 10px;
          background: transparent;
          &::placeholder{
            font-size: 30px;
            line-height: 34px;
          }
        }
      }
      p{
        font-size: 40px;
        color: @primary;
        font-weight: 700;
      }
    }
  }
  .Swiper{
    margin-top: -1px;
  }
}
</style>
