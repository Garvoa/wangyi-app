<!--  -->
<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/bf7495290f221e9e637332ce2d97f44c.png?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/ea312e4b5a94fbac8856b7a923705832.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
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
<style lang="less" scoped>
.my-swipe {
  padding-top: 80px;
  img {
    width: 100%;
    height: 200px;
  }
}
/* @import url(); 引入css类 */
</style>