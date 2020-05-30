<!--  -->
<template>
  <van-tabs>
    <van-tab v-for="(item,index) in list" :title="item" :key="index">内容 {{ index }}</van-tab>
  </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '推荐',
        '居家生活',
        '母婴亲子',
        '运动流行',
        '数码家电',
        '严选全球',
        '服饰鞋包',
        '美食酒水',
        '居家生活',
        '   '
      ]
    }
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>