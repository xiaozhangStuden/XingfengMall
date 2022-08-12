<template>
<div class='SliderValide'>
  拖住滑块，向右滑动进行验证
  <div class="Slider" :style="{left:`${EndX}px`,top:`${EndY}px`}" ref="Slider" @touchmove="DragSlider" @touchstart='DragStart' @touchend='DragEnd'>
    <i class="iconfont icon-xiangyoujiantou"></i>
  </div>
  <div class="Changes-Slider" :style="{width:`${SliderWidth}px`}"></div>
</div>
</template>

<script>

export default {
  name: 'SliderValide',
  components: {},
  data () {
    return {
      StartX: 0,
      StartY: 0,
      EndX: 0,
      EndY: 0,
      SliderWidth: 0
    }
  },
  methods: {

    DragStart (e) {
      // 当用户点击按下时 触发 记录 最初始的位置
      const Position = e.changedTouches[0]
      this.StartX = Position.pageX
      this.StartY = Position.pageY
    },

    DragSlider (e) {
      const Touch = e.changedTouches[0]
      if (Touch.pageX - this.StartX <= 0 || Touch.pageY - this.StartY < 0 || Touch.pageY - this.StartY > 0) return
      this.EndX = Touch.pageX - this.StartX
      this.EndY = Touch.pageY - this.StartY
      // this.SliderWidth = e.changedTouches[0].pageX
    },
    DragEnd () {
      this.EndX = 0
      this.EndY = 0
    }
  }
}
</script>

<style lang='less' scoped>
.SliderValide{
  position: relative;
  height: 80px;
  width: 100%;
  text-align: center;
  line-height: 80px;
  font-size: 25px;
  background-color: #e9e9e9;
  .Slider{
    position: absolute;
    left: 0;
    top: 0;
    width: 80px;
    height: 80px;
    background-color: rgb(249, 249, 249);
  }
  .Changes-Slider{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #1c8feb;
  }
}
</style>
