<!--  -->
<template>
  <ul class="goodsList">
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt />
      <span>新品首发</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt />
      <span>居家生活</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" alt />
      <span>美食酒水</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt />
      <span>母婴亲子</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt />
      <span>个护清洁</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt />
      <span>运动旅行</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt />
      <span>全球特色</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt />
      <span>数码家电</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" alt />
      <span>服饰鞋包</span>
    </li>
    <li class="goodsItem">
      <img src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt />
      <span>好货抄底</span>
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
.goodsList {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  .goodsItem {
    display: flex;
    flex-direction: column;
    margin: 10px;
    font-size: 12px;
    img {
      width: 55px;
      height: 55px;
      margin-bottom: 5px;
    }
  }
}
/* @import url(); 引入css类 */
</style>