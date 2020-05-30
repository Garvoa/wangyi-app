<!--  -->
<template>
  <ul class="g-grow">
    <li class="item" v-for="(item,index) in getpolicyDescList" :key="index">
      <img :src="item.icon" alt />
      <span>{{item.desc}}</span>
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
    ...mapGetters(['getpolicyDescList'])
  },
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