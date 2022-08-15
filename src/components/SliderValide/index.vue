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
      <i :class="activeClass" :style="{color:value ? Bgc :'',fontSize:'20px'}" class="iconfont"></i>
    </div>
    <div class="Changes-Slider"  ref="ChangesSlider" :style="{width:`${MoveClientX}px`,backgroundColor:`${Bgc}`}">
      {{value ? TipText : ''}}
    </div>
  </div>
</template>
<script>

</script>
<script>
export default {
  name: 'SliderValide',
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
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
      if (this.value) return
      this.getSilderClientWidth()
      const { clientX } = e.touches[0]
      // 保存当前用户 按下时距离屏幕左侧的位置
      this.StartClientX = clientX
    },
    // 用户移动滑块事件
    DragSlider (e) {
      if (this.value) return
      const { clientX } = e.touches[0]
      const TempX = clientX - this.StartClientX
      if (TempX < 0 || TempX > this.SliderValideBoxWidth - this.SilderBoxWidth) return
      this.MoveClientX = clientX - this.StartClientX
    },
    // 用户松开滑块事件
    DragEnd () {
      if (this.value) return
      if ((this.SliderValideBoxWidth - this.SilderBoxWidth) - this.MoveClientX < 10) {
        this.$emit('input', true)
        this.TipText = '验证成功'
        this.activeClass = 'icon-chenggong'
        this.$refs.ChangesSlider.style.width = '72vw'
        this.$refs.SliderBox.style.left = '72vw'
      } else {
        this.Bgc = '#fa5151'
        this.SilderStatus = false
        this.MoveClientX = 0
        this.TipText = '验证失败'
        // this.resetSilder()
      }
      if (this.MoveClientX === 0) {
        this.resetSilder()
      }
    },
    resetSilder () {
      this.TipText = '拖住滑块，向右滑动进行验证'
      this.SilderStatus = false
      this.Bgc = '#31c471'
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
  text-align: center;
  line-height: 80px;
  width: c;
  font-size: 25px;
  background-color: #e9e9e9;
  .Slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    overflow: hidden;
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
  .PublicWidth{
    }
}
</style>
