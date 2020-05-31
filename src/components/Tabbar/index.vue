<!--  -->
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">
      <router-link to="/">首页</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="apps-o ">
      <router-link to="/goodslist">分类</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="good-job-o">
      <router-link to="/worthbuying">值得买</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o">
      <router-link to="/shoppingcart">购物车</router-link>
    </van-tabbar-item>
    <van-tabbar-item icon="user-circle-o">
      <router-link to="/user">个人</router-link>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  },
  methods: {
    toUser() {
      this.$router.push({ path: '/user' })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>