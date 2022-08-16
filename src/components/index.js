import HeaderBar from '@/components/HeaderBar/index.vue'
import Logo from '@/components/Logo/index.vue'
import Navbar from '@/components/Navbar/index.vue'
import SliderValide from '@/components/SliderValide/index.vue'
const GlobalComponents = {
  install (Vue) {
    Vue.component(HeaderBar.name, HeaderBar)
    Vue.component(Logo.name, Logo)
    Vue.component(SliderValide.name, SliderValide)
    Vue.component(Navbar.name, Navbar)
  }
}
export default GlobalComponents
