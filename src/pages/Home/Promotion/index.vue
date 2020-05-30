<!--  -->
<template>
  <div class="promotionModule">
    <div class="promItem">
      <a href>
        <img
          src="https://yanxuan.nosdn.127.net/7fd95465634b18169466121fae470269.png?quality=75&type=webp&imageView&thumbnail=750x0"
          alt
        />
      </a>
    </div>

    <div class="promItem">
      <a href="###">
        <img
          src="https://yanxuan.nosdn.127.net/6dc4a8e77b84faef0264dc427c4b1b8b.png?quality=75&type=webp&imageView&thumbnail=750x0"
          alt
        />
      </a>
    </div>

    <div class="floor">
      <a href>
        <img
          src="https://yanxuan.nosdn.127.net/24d20597f75afc86098b0b99c11033bf.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt
        />
      </a>
      <a href>
        <img
          src="https://yanxuan.nosdn.127.net/16ef9b23050650f50604e825fa61e206.png?quality=75&type=webp&imageView&thumbnail=375x0"
          alt
        />
      </a>
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
/* @import url(); 引入css类 */
.promotionModule {
  width: 100%;
  .promItem {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .floor {
    img {
      width: 50%;
    }
  }
}
</style>