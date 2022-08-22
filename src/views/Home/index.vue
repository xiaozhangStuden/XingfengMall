<template>
  <div class="Home">
    <HeaderBar class="base-header">
      <template #left> <i class="iconfont icon-gengduo"></i></template>
      <template #center>
        <div class="XinFeng-Search">
          <div class="Search-model">
            <div class="Search-title">
              <p>新蜂商城</p>
            </div>
            <div class="Serach-input"  @click.stop="$router.push('/search')">
              <i class="iconfont icon-sousuo"></i>
              <input type="text" placeholder="搜索"/>
            </div>
          </div>
        </div>
      </template>
      <template #right><i class="iconfont icon-wode"></i></template>
    </HeaderBar>
    <div class="Home-Body">
    <Swiper class="Swiper" :SwiperList='SwiperList'> </Swiper>
    <HomeCategory :CategoryList='CategoryList'/>
    <HomeHeader message='精选好物'></HomeHeader>
    <GoodsItem v-for="item in NewsGoodsList" :key="item.goodsId" :GoodsItem='item'></GoodsItem>
    <HomeHeader message='热门商品'></HomeHeader>
    <GoodsItem v-for="item in HotGoodsList" :key="item.goodsCoverImg" :GoodsItem='item'></GoodsItem>
    <HomeHeader message='最新推荐'></HomeHeader>
    <GoodsItem v-for="item in RecommendGoodsList" :key="item.goodsCoverImg" :GoodsItem='item'></GoodsItem>
    </div>
  </div>
</template>

<script>
import { getHomeInfo } from '@/api/Home'
import HomeCategory from './components/Home-Category.vue'
import HomeHeader from './components/Home-header.vue'
import GoodsItem from './components/Goods-item.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeHeader,
    GoodsItem
  },
  created () {
    this.LoadHomeInfo()
  },
  data () {
    return {
      SwiperList: [],
      HotGoodsList: [],
      NewsGoodsList: [],
      RecommendGoodsList: [],
      CategoryList: [
        {
          name: '新蜂超市',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
          categoryId: 100001
        }, {
          name: '新蜂服饰',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
          categoryId: 100003
        }, {
          name: '全球购',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
          categoryId: 100002
        }, {
          name: '新蜂生鲜',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
          categoryId: 100004
        }, {
          name: '新蜂到家',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
          categoryId: 100005
        }, {
          name: '充值缴费',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
          categoryId: 100006
        }, {
          name: '9.9元拼',
          imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
          categoryId: 100007
        }, {
          name: '领劵',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
          categoryId: 100008
        }, {
          name: '省钱',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
          categoryId: 100009
        }, {
          name: '全部',
          imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
          categoryId: 100010
        }
      ]
    }
  },
  methods: {
    async LoadHomeInfo () {
      const { data } = await getHomeInfo()
      this.SwiperList = data.carousels
      this.HotGoodsList = data.hotGoodses
      this.NewsGoodsList = data.newGoodses
      this.RecommendGoodsList = data.recommendGoodses
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../styles/variable.less';
.Home {
  background-color: #fff;
  min-width: 350px;
  .icon-gengduo,
  .icon-wode {
    color: #fff;
  }
  .Home-Text {
    font-size: 14px;
  }
  .base-header {
    position: fixed;
    z-index: 2;
    background-color: @primary;
  }
  .XinFeng-Search {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    .Search-model {
      display: flex;
      width: 100%;
      border-radius: 30px;
      background: rgba(255, 255, 255, 0.7);
      padding: 0px 10px;
      align-items: center;
      margin: 15px 0px;
      .Search-title {
        text-align: center;
        padding: 0px 15px;
        border-right: 1px solid #7e7e7e;
      }
      .Serach-input {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        align-items: center;

        i {
          margin-left: 15px;
        }
        input {
          width: 100%;
          font-size: 25px;
          height: 100%;
          margin-left: 10px;
          background: transparent;
          &::placeholder {
            font-size: 25px;
          }
        }
      }
      p {
        font-size: 40px;
        color: @primary;
        font-weight: 700;
      }
    }
  }
  .Home-Body{
    padding-top: 90px;
    padding-bottom: 112px;
  }
  .Swiper {
    margin-top: -1px;
  }
}
</style>
