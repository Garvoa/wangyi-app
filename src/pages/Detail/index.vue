<!--  -->
<template>
  <div>
    <header>
      <a href class="home">
        <van-icon name="home-o" size="0.3rem" />
      </a>
      <span>网易严选</span>

      <a href class="shopping">
        <van-icon name="cart-o" size="0.3rem" />
      </a>
      <a href class="search">
        <van-icon name="search" size="0.3rem" />
      </a>
    </header>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-button color="#FF69B4" type="warning" text="加入购物车" />
      <van-goods-action-button color="#00FF00" type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
// import { reqgoodsDetails } from '../../api'
export default {
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    let obj = {
      id: 1546002
    }
    let formData = new FormData()
    formData.append('obj', obj)
    console.log(formData.obj)
    // reqgoodsDetails(obj)
  }
}
</script>
<style lang="less" scoped>
header {
  width: 90%;
  padding: 10px 5%;
  position: relative;
  overflow: hidden;
  background-color: white;
  span {
    width: 70px;
    white-space: nowrap;
    position: absolute;
    font-size: 20px;
    right: 0px;
    left: 0px;
    top: 10px;
    bottom: 0px;
    margin: auto;
  }
  .home {
    float: left;
  }
  .search {
    float: right;
  }
  .shopping {
    float: right;
    margin-left: 10px;
  }
}
/* @import url(); 引入css类 */
</style>