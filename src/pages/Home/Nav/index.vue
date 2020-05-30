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
        />
        <van-button class="loginBtn">登录</van-button>
      </div>
      <div class="nav-selsect">
        <span class="tabAlter" v-if="!isShow">全部频道</span>
        <div class="list" v-if="isShow">
          <span class="nav-selsect-active">推荐</span>
          <span>居家生活</span>
          <span>服饰鞋包</span>
          <span>美食酒水</span>
        </div>

        <div class="moreCate isshow" v-else>
          <van-button class="cateTag nav-selsect-active">推荐</van-button>
          <van-button class="cateTag">居家生活</van-button>
          <van-button class="cateTag">服饰鞋包</van-button>
          <van-button class="cateTag">美食酒水</van-button>
          <van-button class="cateTag">个护清洁</van-button>
          <van-button class="cateTag">母婴亲子</van-button>
          <van-button class="cateTag">运动流行</van-button>
          <van-button class="cateTag">数码家电</van-button>
          <van-button class="cateTag">严选全球</van-button>
        </div>

        <div class="toggle">
          <van-icon
            :name="isShow?'arrow-up':'arrow-down'"
            @touchstart.stop.prevent="isShowSelsect"
          />
        </div>
      </div>
      <div class="nav-Line" v-show="isShow"></div>
    </nav>
    <van-overlay :show="!isShow" @click="isShow = true" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      value: ''
    }
  },
  methods: {
    isShowSelsect() {
      this.isShow = !this.isShow
    }
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
    .tabAlter {
      position: absolute;
      left: 20px;
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
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 0 25px;
      span {
        display: inline-block;
        padding: 5px 10px;
        font-size: 14px;
      }
    }
    .toggle {
      margin-left: 30px;
      position: absolute;
      right: 20px;
      top: 5px;
    }
  }
  .nav-Line {
    width: 40px;
    height: 2px;
    background-color: red;
    transform: translateX(30px);
  }
}
/* @import url(); 引入css类 */
</style>