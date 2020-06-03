<!--  -->
<template>
  <div class="classifyList">
    <div class="mask">
      <van-search v-model="value" class="search" placeholder="搜索商品，共254615款好物" />
    </div>
    <section class="centent">
      <ul class="left" v-if="categoryLeftData">
        <li
          class="item"
          :class="{'active':actvieIndex===index}"
          v-for="(item,index) in categoryLeftData.categoryL1List"
          :key="index"
          @click="switchList($event,index,item.id)"
        >{{item.name}}</li>
      </ul>

      <!-- <div class="punctuation" ref="ptc"></div> -->
      <van-pull-refresh
        v-model="isLoading"
        :head-height="80"
        @refresh="onRefresh"
        pulling-text=" "
        loosing-text=" "
        loading-text=" "
      >
        <div class="right">
          <img
            class="banner"
            src="https://yanxuan.nosdn.127.net/2c669cac8b0844bbd2620a5172a53dbd.jpg?quality=75&type=webp&imageView&thumbnail=0x196"
            alt
          />
          <ul>
            <li v-for="item in categoryList?categoryList:subCateList" :key="item.id">
              <img :src="item.wapBannerUrl" alt />
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
      </van-pull-refresh>
    </section>
    <div class="line"></div>

    <!-- 底部导航 -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      active: '',
      show: false,
      actvieIndex: 0,
      value: '',
      isLoading: false
    }
  },
  computed: {
    ...mapState({
      categoryLeftData: state => state.categoryLeft.categoryLeftData,
      categoryRightData: state => state.categoRight.categoryRightData
    }),
    ...mapGetters(['categoryList', 'subCateList'])
  },
  methods: {
    switchList(e, index, id) {
      // let num = 40 * index
      // console.log(num)
      // this.$refs.ptc.style.transform = `translatey(${num}px)`
      this.actvieIndex = index
      this.$store.dispatch('reqcategoryRightData', id)
    },
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 10)
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch('reqcategoryLeftData')
    this.$store.dispatch('reqcategoryRightData', 11)
  }
}
</script>
<style lang="less" scoped>
.classifyList {
  width: 100%;
  height: 100%;
  text-align: center;
  .mask {
    width: 100%;
    height: 55px;
    padding-top: 10px;
    position: fixed;
    background-color: #eee;
    z-index: 20;
  }
  .search {
    margin: auto;
    border-radius: 10px;
    background-color: #dddddd;
    width: 80%;
    height: 40px;
    .icon {
      vertical-align: middle;
    }
  }
  .line {
    width: 100%;
    height: 1px;

    background-color: #dddddd;
    position: absolute;
    top: 8%;
  }
  .centent {
    display: flex;

    .left {
      z-index: 10;
      white-space: nowrap;
      padding-right: 10px;
      border-right: 1px solid #dddddd;
      position: fixed;
      left: 0px;
      top: 8%;

      .item {
        margin: 25px 0 0 10px;
      }
      .active {
        color: red;
      }
    }
    .right {
      margin-top: 70px;
      overflow: hidden;
      .banner {
        width: 250px;
        margin-top: 10px;
        margin-left: 20%;
      }
      ul {
        margin-bottom: 15%;
        margin-left: 22%;
        overflow: hidden;

        li {
          float: left;
          width: 40%;
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
    // .punctuation {
    //   width: 2px;
    //   height: 22px;
    //   position: absolute;
    //   background-color: red;
    //   top: 11%;
    //   transition: 0.5s;
    //   // transform: translatey(30px);
    // }
  }
}
/* @import url(); 引入css类 */
</style>