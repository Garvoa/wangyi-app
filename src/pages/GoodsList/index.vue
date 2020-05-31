<!--  -->
<template>
  <div class="classifyList">
    <van-button class="search">
      <van-icon name="search" size="0.18rem" class="icon" />
      <span>搜索商品，共254615款好物</span>
    </van-button>
    <div class="line"></div>
    <section class="centent">
      <!-- <van-tree-select :items="items" :main-active-index.sync="activeIndex" /> -->
      <ul class="left">
        <li
          class="item"
          :class="{'active':actvieIndex===index}"
          v-for="(item,index) in categoryLeftData[0].categoryL1List"
          :key="index"
          @click="switchList(index)"
        >{{item.name}}</li>
      </ul>
      <div class="punctuation" ref="ptc"></div>
      <div class="right">
        <img
          class="banner"
          src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
          alt
        />
        <ul>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>

          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
          <li>
            <img
              src="https://yanxuan.nosdn.127.net/ddf44708f576246755479a7261932b3b.png?quality=75&type=webp&imageView&thumbnail=144x144"
              alt
            />
            <span>99专区</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="line"></div>

    <!-- 底部导航 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      active: '',
      show: false,
      actvieIndex: 0
    }
  },
  computed: {
    ...mapState({
      categoryLeftData: state => state.categoryLeft.categoryLeftData
    })
  },
  methods: {
    switchList(index) {
      let num = 46 * index
      this.$refs.ptc.style.transform = `translatey(${num}px)`
      this.actvieIndex = index
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch('reqcategoryLeftData')
  }
}
</script>
<style lang="less" scoped>
.classifyList {
  width: 100%;
  height: 100%;
  text-align: center;
  .search {
    margin-top: 10px;
    border-radius: 10px;
    background-color: #dddddd;
    width: 90%;
    height: 40px;
    .icon {
      vertical-align: middle;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    margin-top: 10px;
    background-color: #dddddd;
  }
  .centent {
    display: flex;
    position: relative;
    .left {
      white-space: nowrap;
      padding-right: 10px;
      border-right: 1px solid #dddddd;

      .item {
        margin: 30px 0 0 10px;
      }
      .active {
        color: red;
      }
    }
    .right {
      .banner {
        width: 250px;
        margin: 10px;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;

        li {
          margin: 10px 10px;
          span {
            display: block;
          }
          img {
            width: 66px;
            height: 66px;
          }
        }
      }
    }
    .punctuation {
      width: 2px;
      height: 22px;
      position: absolute;
      background-color: red;
      top: 30px;
      transition: 0.5s;
      // transform: translatey(30px);
    }
  }
}
/* @import url(); 引入css类 */
</style>