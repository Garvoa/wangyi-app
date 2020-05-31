<!--  -->
<template>
  <div>
    <!-- <img src="../assets/20200531135129.jpg" alt v-if="status===404" />
    <div>{{status}}</div>-->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({ status: state => state.status })
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>

<style scoped>
img {
  width: 100%;
  position: absolute;
  height: 400px;
  top: 300px;
  z-index: 100;
}
/* @import url(); 引入css类 */
</style>