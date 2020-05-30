<!--  -->
<template>
  <ul class="goodsList">
    <li class="goodsItem" v-for="(kingKong,index) in getkingKongList" :key="index">
      <img :src="kingKong.picUrl" alt />
      <span>{{kingKong.text}}</span>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  computed: {
    ...mapGetters(['getkingKongList'])
  },
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