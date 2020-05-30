<!--  -->
<template>
  <div class="home">
    <!-- 头部导航 -->
    <HeadNav />
    <!-- 轮播图 -->
    <Carousel />
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

export default {
  components: {
    Carousel,
    HeadNav,
    OfficialMsg,
    HomeGoodsList,
    FreshGift,
    Floor,
    Footer,
    Promotion
  },
  data() {
    return {}
  },
  methods: {},
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