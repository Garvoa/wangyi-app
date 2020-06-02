<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      ref="list"
      @load="onLoad"
    >
      <div class="van-clearfix">
        <div v-for="(item,index) in directlyList" :key="index" class="item">
          <div class="user">
            <img :src="item.listPicUrl" alt />
            <div>
              <p>{{item.name}}</p>
              <p class="retailPrice">￥{{item.retailPrice}}</p>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    directlyList: Array,
    onLoad: Function
  },
  data() {
    return {
      finished: false,
      loading: false
    }
  },
  methods: {
    isLoading() {
      this.finished = true
      this.loading = false
    }
  },
  mounted() {}
}
</script>

<style lang="less" scoped>
.van-list {
  padding-top: 130px;
  height: 100%;
  // overflow: hidden;
  .item {
    float: left;
    width: 40%;
    padding-left: 23px;
  }
  .user {
    display: flex;
    align-items: left;
    flex-direction: column;
    height: 226px;
    align-content: space-around;

    img {
      width: 100%;
    }
    .retailPrice {
      color: red;
      font-size: 18px;
    }
  }
}

/* @import url(); 引入css类 */
</style>
