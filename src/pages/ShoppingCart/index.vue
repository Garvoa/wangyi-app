<!--  -->
<template>
  <div>
    <div class="m-cartHd">
      <span class="left">购物车</span>

      <a href class="right">
        <span>领券</span>
      </a>
    </div>
    <ul class="g-grow">
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>网易自营品牌</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="container">
      <van-icon name="shopping-cart-o" size="1rem" />
      <van-button type="danger">登录</van-button>
    </div>
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
.m-cartHd {
  font-size: 18px;
  overflow: hidden;

  height: 50px;
  margin: 0 auto;
  background-color: white;
  .left {
    float: left;
    padding: 15px;
  }
  .right {
    float: right;
    padding: 15px;
    color: red;
  }
}
.g-grow {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  background-color: #dddddd;
  span {
    font-size: 14px;
  }
  img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
.container {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  button {
    margin-top: 10px;
    width: 200px;
    right: 50px;
  }
}
/* @import url(); 引入css类 */
</style>