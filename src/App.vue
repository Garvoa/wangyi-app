<!--  -->
<template>
  <div>
    <router-view></router-view>
    <Err />
    <Tabbar />
  </div>
</template>

<script>
import Err from './components/404'
import Tabbar from './components/Tabbar'
export default {
  components: { Tabbar, Err },
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch('reqHomeData')
    this.$store.dispatch('reqindexCateModulenavListData')
  }
}
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>