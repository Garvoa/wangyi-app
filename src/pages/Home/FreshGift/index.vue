<!--  -->
<template>
  <div class="freshGift">
    <h2>一 新人专享礼 一</h2>
    <div class="freshGift-content">
      <div class="freshGift-left">
        <span>新人专享礼包</span>
        <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt />
      </div>
      <div class="freshGift-right">
        <div class="freshGift-right-item">
          <div>
            <p>福利社</p>
            <p>今日特价</p>
          </div>

          <img
            src="https://yanxuan-item.nosdn.127.net/f444ac11115a8249a92dc95dccad6e07.png?quality=75&type=webp&imageView&thumbnail=200x200"
            alt
          />
        </div>
        <div class="freshGift-right-item">
          <div>
            <p>新人拼团</p>
            <p>1元起包邮</p>
          </div>

          <img
            src="https://yanxuan-item.nosdn.127.net/08ed8b0e068a3ff2a0aae8c427db1858.png?quality=75&type=webp&imageView&thumbnail=200x200"
            alt
          />
        </div>
      </div>
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
.freshGift {
  margin-bottom: 10px;
  h2 {
    padding: 10px;
    font-size: 18px;
    text-align: center;
  }
  .freshGift-content {
    overflow: hidden;
    .freshGift-left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      float: left;
      width: 170px;
      height: 215px;
      margin-left: 15px;
      font-size: 18px;
      background-color: #f9e9cf;
      margin-right: 5px;
      img {
        width: 130px;
        height: 130px;
      }
    }
    .freshGift-right {
      float: left;

      .freshGift-right-item {
        display: flex;
        justify-content: space-between;
        background-color: #f9e9cf;
        margin-bottom: 5px;
        div {
          margin-top: 10px;
          p {
            &:nth-child(1) {
              font-size: 16px;
            }
            &:nth-child(2) {
              font-size: 12px;
            }
          }
        }
      }
      img {
        width: 105px;
      }
    }
  }
}
/* @import url(); 引入css类 */
</style>