<!--  -->
<template>
  <footer class="footer">
    <div class="bd">
      <van-button plain hairline size="small" text="#000">下载APP</van-button>
      <van-button plain hairline size="small" text="#000">电脑版</van-button>
    </div>

    <p>
      网易公司版权所有 © 1997-2020
      <br />食品经营许可证：JY13301080111719
    </p>
  </footer>
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
.footer {
  width: 100%;
  height: 155px;
  background-color: #414141;
  color: #999;
  text-align: center;
  .bd {
    width: 200px;
    margin: 0 auto;
    padding-top: 20px;
    display: flex;
    justify-content: space-evenly;
    button {
      background-color: #414141;
      color: #ffffff;
    }
  }
  p {
    margin-top: 10px;
  }
}
/* @import url(); 引入css类 */
</style>