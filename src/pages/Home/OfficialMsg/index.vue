<!--  -->
<template>
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
.g-grow {
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  span {
    font-size: 12px;
  }
  img {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
/* @import url(); 引入css类 */
</style>