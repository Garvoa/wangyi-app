<!--  -->
<template>
  <div>
    <div class="hd">
      <p class="name">{{cateModulenavItem.name}}</p>
      <p class="desc">{{cateModulenavItem.name}}</p>
    </div>
    <div>
      <ul class="list">
        <li class="item" v-for="item in cateModulenavItem.subCateList" :key="item.id">
          <img v-lazy="item.wapBannerUrl" alt />
          <p>{{item.frontName}}</p>
          <span>$132</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  computed: {
    ...mapState({
      cateModulenavItem: state => state.cateModulenav.CateModulenavitemData
    })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
.hd {
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 10px;
  background-color: white;
  .name {
    font-size: 16px;
    padding: 10px 0px;
  }
  .desc {
    font-size: 12px;
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: white;
  margin-bottom: 30px;
  // background-color: #dddddd;
  .item {
    border: 1px solid #dddddd;
    margin-bottom: 20px;
    width: 160px;
    img {
      width: 160px;
      // border: 1px solid #dddddd;
    }
    span {
      font-size: 18px;
      color: red;
      padding-left: 10px;
    }
    p {
      width: 100%;
      padding-left: 10px;
    }
  }
}
/* @import url(); 引入css类 */
</style>