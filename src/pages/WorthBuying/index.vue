<!--  -->
<template>
  <div class="worthBuy">
    <header>
      <a href class="home">
        <van-icon name="home-o" size="0.3rem" />
      </a>
      <span>值得买</span>

      <a href class="shopping">
        <van-icon name="cart-o" size="0.3rem" />
      </a>
      <a href class="search">
        <van-icon name="search" size="0.3rem" />
      </a>
    </header>

    <div class="swiper">
      <div class="font">
        <span class="worthBuyfont">值得买</span>
        <span>严选好物 用心生活</span>
      </div>
      <div>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in WorthBuyingData" :key="index">
              <div v-for="(pic,index) in item" :key="index" class="swiper-item">
                <img :src="pic? pic.picUrl:''" alt />
                <span v-if="pic">{{pic.mainTitle}}</span>
                <span v-if="pic">{{pic.viceTitle}}</span>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <section>
      <div class="content">
        <ul>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>111</span>
            </div>
          </li>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>112</span>
            </div>
          </li>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>112</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>112</span>
            </div>
          </li>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>112</span>
            </div>
          </li>
          <li class="contentitem">
            <img
              class="m-image"
              src="https://yanxuan.nosdn.127.net/a5c24eec5d8c68fe03ac2c8f86018fa9.jpg?imageView&thumbnail=345y191.66666666666669&quality=95"
              alt
            />
            <p>铁粉们，值得买的新东西来咯~</p>
            <div class="m-lookDetail">
              <img
                class="m-userName"
                src="http://yanxuan.nosdn.127.net/d0929d6affc4f1272da63f13fac44c53.jpg?imageView&quality=65&thumbnail=48y48"
                alt
              />
              <span>选妹</span>
              <img src="../../assets/liulan.png" alt class="m-userName" />
              <span>112</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Swiper from 'swiper'
export default {
  data() {
    return {}
  },
  methods: {},
  computed: {
    ...mapState({ WorthBuyingData: state => state.worthBuying.WorthBuyingData })
  },
  watch: {
    WorthBuyingData() {
      this.$nextTick(() => {
        new Swiper('.swiper-container', {
          // direction: 'vertical', // 垂直切换选项
          // loop: true, // 循环模式选项
          slidesPerView: 4,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
            type: 'custom',
            renderCustom: function(swiper, current, total) {
              var customPaginationHtml = ''
              for (var i = 0; i < total; i++) {
                //判断哪个分页器此刻应该被激活
                if (i == current - 1) {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>'
                } else {
                  customPaginationHtml +=
                    '<span class="swiper-pagination-customs"></span>'
                }
              }
              return customPaginationHtml
            }
          }
        })
      })
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$store.dispatch('reqreqWorthBuyingData')
  }
}
</script>
<style lang="less" scoped>
.worthBuy {
  width: 100%;
  height: 100%;
  background-color: #eee;
  header {
    width: 90%;
    padding: 10px 5%;
    position: relative;
    overflow: hidden;

    span {
      width: 70px;
      white-space: nowrap;
      position: absolute;
      font-size: 20px;
      right: 0px;
      left: 0px;
      top: 15px;
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
  .swiper {
    background-image: url('../../assets/u=3959410512,1984184250&fm=26&gp=0.jpg');
    // background: no-repeat;
    width: 100%;
    padding-bottom: 20px;
    .font {
      padding: 30px;
      span {
        color: #ffffff;
      }
      .worthBuyfont {
        font-size: 25px;
        font-weight: 700;
        color: tomato;
        text-shadow: 1px 1px 1px #ff0000;
      }
    }
    .swiper-container {
      width: 95%;
      margin: 0 auto;
      padding-bottom: 20px;

      background-color: white;
      border-radius: 10px;

      .swiper-wrapper {
        display: flex;

        .swiper-slide {
          margin-top: 5px;
          text-align: center;
          width: 100px;
          .swiper-item {
            width: 100px;
            margin-top: 10px;
            span {
              white-space: nowrap;
              margin-top: 5px;
              font-size: 12px;
              display: block;
            }
            img {
              width: 50px;
              height: 50px;
            }
          }
        }
      }

      /deep/ .swiper-pagination {
        bottom: 5px;
        /deep/ .swiper-pagination-customs {
          width: 30px;
          height: 4px;
          display: inline-block;
          background: #000;
          opacity: 0.3;
          margin-top: 5px;
        }

        /*自定义分页器激活时的样式表现*/
        /deep/ .swiper-pagination-customs-active {
          opacity: 1;
          background-color: #f78e00;
        }
      }
    }
  }
  section {
    display: flex;
    justify-content: space-evenly;
    margin-top: 10px;
    .content {
      // width: 50%;
      width: 45%;
      // padding: 10px;
      .contentitem {
        border-radius: 10px;
        // border: 1px solid #111111;
        background-color: white;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        padding-bottom: 10px;
        .m-lookDetail {
          width: 100%;
          padding-top: 10px;
        }
      }
    }
    .m-image {
      border-radius: 10px 10px 0 0px;
      width: 100%;
    }
    .m-userName {
      width: 20px;
      height: 20px;
      vertical-align: bottom;
      border-radius: 50%;
      margin-left: 10px;
    }
  }
}
/* ../..import url(); 引入css类 */
</style>