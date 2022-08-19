import HeaderBar from '@/components/HeaderBar/index.vue'
import Logo from '@/components/Logo/index.vue'
import Navbar from '@/components/Navbar/index.vue'
import Skeleton from '@/components/Skeleton/index.vue'
import SliderValide from '@/components/SliderValide/index.vue'
import Swiper from '@/components/Swiper/index.vue'
const GlobalComponents = {
  install (Vue) {
    Vue.component(HeaderBar.name, HeaderBar)
    Vue.component(Logo.name, Logo)
    Vue.component(SliderValide.name, SliderValide)
    Vue.component(Navbar.name, Navbar)
    Vue.component(Swiper.name, Swiper)
    Vue.component(Skeleton.name, Skeleton)
  }
}
export default GlobalComponents
