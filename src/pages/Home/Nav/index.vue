<!--  -->
<template>
  <div class="nav-head">
    <nav>
      <div class="nav-head-line">
        <h1>
          <img
            class="logo"
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"
            alt="网易严选"
          />
        </h1>

        <van-field
          v-model="value"
          left-icon="search"
          class="loginSeach"
          placeholder="搜索商品，共254615款好物"
          size="large"
          @click="toSearch"
        />
        <van-button class="loginBtn">登录</van-button>
      </div>
      <div class="nav-selsect">
        <span class="tabAlter" v-if="!isShow">全部频道</span>

        <van-tabs v-if="isShow" v-model="navIndex" @click="selectActive">
          <van-tab
            v-for="(item,index) in CateModulenavList"
            :key="index"
            class="van-tabitem"
            :title="item.name"
          ></van-tab>
        </van-tabs>
        <div class="moreCate isshow" v-else>
          <van-button
            class="cateTag"
            :class="navIndex===index?'nav-selsect-active':''"
            v-for="(item,index) in CateModulenavList"
            :key="index"
            @click="selectActive(index,item.name)"
          >{{item.name}}</van-button>
        </div>

        <div id="toggle" @touchstart.stop.prevent="isShowSelsect">
          <van-icon :name="isShow?'arrow-up':'arrow-down'" />
        </div>
      </div>
      <!-- <div class="nav-Line" v-show="isShow"></div> -->
    </nav>
    <van-overlay :show="!isShow" @click="isShow = true" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    updataIndex: Function
  },
  data() {
    return {
      isShow: true,
      value: '',
      navIndex: 0
    }
  },
  methods: {
    isShowSelsect() {
      this.isShow = !this.isShow
    },
    selectActive(name, title) {
      this.navIndex = name
      this.isShow = true
      this.id = this.CateModulenavList.reduce((p, c) => {
        c.name === title ? (p = c.id) : ''
        return p
      }, '')
      this.$store.commit('DELETE_CateModulenavitemData')
      const cache = window.sessionStorage.getItem(`${this.id}`)

      cache
        ? this.$store.commit('UPDATA_CateModulenavitemData', JSON.parse(cache))
        : this.$store.dispatch('reqindexCateModulenavitemData', this.id)
      this.updataIndex(name)
    },
    toSearch() {
      this.$router.push({ path: '/search' })
    }
  },
  computed: {
    ...mapState({
      CateModulenavList: state => state.cateModulenav.CateModulenavListData
    })
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
.nav-head {
  background-color: white;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  // /deep/ .van-tab__text {

  // }
  nav {
    padding-top: 10px;
    position: relative;
    z-index: 100;
    background-color: white;
    .nav-head-line {
      display: flex;
      align-items: center;
      justify-content: center;

      .logo {
        width: 70px;
        height: 20px;
        margin-right: 10px;
      }
      .loginSeach {
        border-radius: 5px;
        height: 30px;
        padding: 5px 5px 0 5px;
        width: 210px;
        background-color: #ededed;
      }
      .loginBtn {
        margin-left: 10px;
        border-radius: 5px;
        border: red 1px solid;
        color: red;
        font-size: 10px;
        height: 20px;
        width: 40px;
        padding: 0;
      }
    }
  }

  .nav-selsect-active {
    color: red;
  }

  .nav-selsect {
    position: relative;
    #toggle {
      position: absolute;
      right: 0px;
      top: -0px;
      width: 83px;
      height: 44px;
      background-color: white;
      text-align: center;
      line-height: 55px;
    }
    .tabAlter {
      position: absolute;
      left: 20px;
      top: 10px;
    }
    .moreCate {
      display: flex;
      flex-wrap: wrap;
      padding-top: 30px;
      margin-top: 10px;

      // justify-content: space-around;
      // align-content: space-evenly;
      span {
        display: inline-block;
        padding: 5px 10px;
        font-size: 14px;
      }
      .nav-selsect-active {
        color: red;
      }
      .cateTag {
        margin: 10px;
        width: 70px;
        height: 30px;
        padding: 0px;
        .van-button__content {
          .van-button__text {
            font-size: 12px;
          }
        }
        &:nth-last-child(1) {
          display: none;
        }
      }
    }
  }
  // .nav-Line {
  //   width: 40px;
  //   height: 2px;
  //   background-color: red;
  //   transform: translateX(30px);
  // }
}

/* @import url(); 引入css类 */
</style>