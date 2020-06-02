<template>
  <RecycleScroller
    class="scroller"
    :items="directlyList"
    :item-size="32"
    key-field="id"
    v-slot="{ item }"
    :page-mode="true"
    :buffer="500"
  >
    <div class="user">
      <img :src="item.listPicUrl" alt />
      <div>
        <p>{{item.name}}</p>
        <p class="retailPrice">￥{{item.retailPrice}}</p>
      </div>
    </div>
  </RecycleScroller>
</template>

<script>
export default {
  props: { directlyList: Array },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.scroller {
  height: 100%;
  width: 100%;
  margin-top: 120px;
  padding: 14px;
  // background-color: #cccccc;
}

.user {
  float: left;
  height: 32%;
  padding: 0 10px;
  display: flex;
  align-items: left;
  flex-direction: column;

  width: 40%;
  img {
    width: 100%;
  }
  .retailPrice {
    color: red;
    font-size: 18px;
  }
}
</style>