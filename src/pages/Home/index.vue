<!--  -->
<template>
  <div class="home">
    <!-- 头部导航 -->
    <HeadNav :updataIndex="updataIndex" />
    <!-- 轮播图 -->
    <Carousel />
    <div v-if="homeIndex===0">
      <!-- 官方信息 -->
      <OfficialMsg />
      <!-- 商品列表 -->
      <HomeGoodsList />
      <!-- 促销 -->
      <Promotion />
      <!-- 新人专享礼 -->
      <FreshGift />
      <!-- 楼层 -->
      <Floor />
      <!-- 底部区域 -->
      <Footer />
    </div>
    <NavItem v-else />
  </div>
</template>

<script>
import Carousel from './Carousel'
import HeadNav from './Nav'
import OfficialMsg from './OfficialMsg'
import HomeGoodsList from './HomeGoodsList'
import Promotion from './Promotion'
import FreshGift from './FreshGift'
import Floor from './Floor'
import Footer from './Footer'
import NavItem from '../../components/NavItem'

export default {
  components: {
    Carousel,
    HeadNav,
    OfficialMsg,
    HomeGoodsList,
    FreshGift,
    Floor,
    Footer,
    Promotion,
    NavItem
  },
  data() {
    return {
      homeIndex: 0
    }
  },
  methods: {
    updataIndex(index) {
      this.homeIndex = index
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
}
/* @import url(); 引入css类 */
</style>