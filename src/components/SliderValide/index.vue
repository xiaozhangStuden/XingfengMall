<template>
  <div class="SliderValide" ref="SliderValide">
    <div class="Tip">{{TipText}}</div>
    <div
      ref="SliderBox"
      class="Slider"
      :style="{left:`${MoveClientX}px`}"
      @touchmove="DragSlider"
      @touchstart="DragStart"
      @touchend="DragEnd"
    >
      <i :class="activeClass" :style="{color:SilderStatus ? Bgc :''}" class="iconfont"></i>
    </div>
    <div class="Changes-Slider" :style="{width:`${MoveClientX}px`,backgroundColor:`${Bgc}`}">{{SilderStatus? TipText :''}}</div>
  </div>
</template>

<script>
export default {
  name: 'SliderValide',
  components: {},
  data () {
    return {
      StartClientX: 0,
      MoveClientX: 0,
      SliderValideBoxWidth: 0,
      SilderBoxWidth: 0,
      TipText: '拖住滑块，向右滑动进行验证',
      SilderStatus: false,
      Bgc: '#31c471',
      activeClass: 'icon-xiangyoujiantou'
    }
  },
  mounted () {
    this.getSilderClientWidth()
  },
  methods: {
    // 用户按下事件
    DragStart (e) {
      const { clientX } = e.touches[0]
      // 保存当前用户 按下时距离屏幕左侧的位置
      this.StartClientX = clientX
    },
    // 用户移动滑块事件
    DragSlider (e) {
      const { clientX } = e.touches[0]
      const TempX = clientX - this.StartClientX
      // console.log(this.SliderValideBoxWidth - this.SilderBoxWidth)
      if (TempX < 0 || TempX > this.SliderValideBoxWidth - this.SilderBoxWidth) return
      this.MoveClientX = clientX - this.StartClientX
      // console.log(this.SliderValideBoxWidth - this.SilderBoxWidth)
    },
    // 用户松开滑块事件
    DragEnd () {
      if ((this.SliderValideBoxWidth - this.SilderBoxWidth) - this.MoveClientX < 10) {
        this.SilderStatus = true
        this.TipText = '验证成功'
        this.activeClass = 'icon-chenggong'
      } else {
        this.Bgc = '#fa5151'
        // this.MoveClientX = 0
      }
    },

    getSilderClientWidth () {
      this.SliderValideBoxWidth = this.$refs.SliderValide.clientWidth
      this.SilderBoxWidth = this.$refs.SliderBox.clientWidth
    }
  }
}
</script>

<style lang='less' scoped>
.SliderValide {
  position: relative;
  height: 80px;
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  background-color: #e9e9e9;
  .Slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    background-color: rgb(249, 249, 249);
  }
  .Changes-Slider {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: 1;
    color: #fff;
  }
  .Tip{
    z-index: 10;
  }
}
</style>
