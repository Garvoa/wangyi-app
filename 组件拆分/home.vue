<!--  -->
<template>
  <div class="home">
    <!-- 导航头部 -->
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

          <van-button class="loginSeach">
            <van-icon name="search" size="0.18rem" />
            <span>搜索商品，共254615款好物</span>
          </van-button>
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
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/7406334eaca021f7316b86ee21c3f320.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/bf7495290f221e9e637332ce2d97f44c.png?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://yanxuan.nosdn.127.net/ea312e4b5a94fbac8856b7a923705832.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
          alt
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 官方信息 -->
    <ul class="g-grow">
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>网易自营品牌</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>30天无忧退货</span>
      </li>
      <li class="item">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt />
        <span>48小时快速退款</span>
      </li>
    </ul>
    <!-- 产品列表 -->
    <ul class="goodsList">
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt />
        <span>新品首发</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt />
        <span>居家生活</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" alt />
        <span>美食酒水</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt />
        <span>母婴亲子</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt />
        <span>个护清洁</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt />
        <span>运动旅行</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt />
        <span>全球特色</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt />
        <span>数码家电</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" alt />
        <span>服饰鞋包</span>
      </li>
      <li class="goodsItem">
        <img src="https://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt />
        <span>好货抄底</span>
      </li>
    </ul>
    <!-- 促销 -->
    <div class="promotionModule">
      <div class="promItem">
        <a href>
          <img
            src="https://yanxuan.nosdn.127.net/7fd95465634b18169466121fae470269.png?quality=75&type=webp&imageView&thumbnail=750x0"
            alt
          />
        </a>
      </div>

      <div class="promItem">
        <a href="###">
          <img
            src="https://yanxuan.nosdn.127.net/6dc4a8e77b84faef0264dc427c4b1b8b.png?quality=75&type=webp&imageView&thumbnail=750x0"
            alt
          />
        </a>
      </div>

      <div class="floor">
        <a href>
          <img
            src="https://yanxuan.nosdn.127.net/24d20597f75afc86098b0b99c11033bf.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt
          />
        </a>
        <a href>
          <img
            src="https://yanxuan.nosdn.127.net/16ef9b23050650f50604e825fa61e206.png?quality=75&type=webp&imageView&thumbnail=375x0"
            alt
          />
        </a>
      </div>
    </div>
    <!-- 新人专享礼 -->
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
    <!-- 楼层 -->
    <div class="m-popularItemModule m-indexFloor">
      <div class="moduleTitle">
        <div class="left">人气推荐</div>
        <a class="right" href="/item/recommend">
          更多>
          <i class="icon u-icon u-icon-index-titleArrow"></i>
        </a>
      </div>
      <a class="spItem">
        <div class="wraper">
          <div class="m-lazyload m-lazyload-loaded">
            <img
              data-original="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              data-src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              class="swiper-lazy"
              src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              style="display: inline;"
            />
          </div>
        </div>
        <div class="spItemdesc">
          <div class="name">15分钟快速救脸，射频多功能美容仪</div>
          <div class="desc">掌心里的“美容院”</div>
          <div class="price">¥899</div>
        </div>
      </a>
      <div class="m-indexItem m-goodGrid">
        <ul class="list">
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">【抢购】一次性医用口罩 1...</div>
              <div class="newItemDesc">医用级别防护，99%细菌过滤效率 三层安全防护</div>
              <div class="price">
                <span class="priceInner">
                  <span>¥60</span>
                </span>
              </div>
              <!-- <div class="tagWraper new">
                <span class="tag-status-new gradientPrice">特价</span>
              </div>-->
            </div>
          </li>
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">告别啃食尴尬，秘制无骨凤爪...</div>
              <div class="newItemDesc">肉嘟嘟，大口吃</div>
              <div class="price">
                <span>¥13</span>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">男式精梳棉经典POLO衫</div>
              <div class="newItemDesc">甄选面料，经典百搭版型</div>
              <div class="price">
                <span>¥99</span>
              </div>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 楼层 -->
    <div class="m-popularItemModule m-indexFloor">
      <div class="moduleTitle">
        <div class="left">人气推荐</div>
        <a class="right" href="/item/recommend">
          更多>
          <i class="icon u-icon u-icon-index-titleArrow"></i>
        </a>
      </div>
      <a class="spItem">
        <div class="wraper">
          <div class="m-lazyload m-lazyload-loaded">
            <img
              data-original="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              data-src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              class="swiper-lazy"
              src="https://yanxuan-item.nosdn.127.net/02dd07dbee4575a71afa30fd680a6ec7.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=280x280"
              style="display: inline;"
            />
          </div>
        </div>
        <div class="spItemdesc">
          <div class="name">15分钟快速救脸，射频多功能美容仪</div>
          <div class="desc">掌心里的“美容院”</div>
          <div class="price">¥899</div>
        </div>
      </a>
      <div class="m-indexItem m-goodGrid">
        <ul class="list">
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/ac0c99a7494504ef506de1bb03bbacc7.png?type=webp&imageView&quality=65&thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">【抢购】一次性医用口罩 1...</div>
              <div class="newItemDesc">医用级别防护，99%细菌过滤效率 三层安全防护</div>
              <div class="price">
                <span class="priceInner">
                  <span>¥60</span>
                </span>
              </div>
              <!-- <div class="tagWraper new">
                <span class="tag-status-new gradientPrice">特价</span>
              </div>-->
            </div>
          </li>
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/eb5aaec3178da93222aeca4b7fcaf757.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">告别啃食尴尬，秘制无骨凤爪...</div>
              <div class="newItemDesc">肉嘟嘟，大口吃</div>
              <div class="price">
                <span>¥13</span>
              </div>
            </div>
          </li>
          <li class="item">
            <div class="good">
              <div class="hd">
                <div class="wraper">
                  <div class="m-lazyload m-lazyload-loaded">
                    <img
                      data-original="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      data-src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      class="swiper-lazy"
                      src="https://yanxuan-item.nosdn.127.net/5a0d395159cf7f51d48c45599b96df3f.png?type=webp&amp;imageView&amp;quality=65&amp;thumbnail=330x330"
                      style="display: block;"
                    />
                  </div>
                </div>
              </div>
              <div class="name">男式精梳棉经典POLO衫</div>
              <div class="newItemDesc">甄选面料，经典百搭版型</div>
              <div class="price">
                <span>¥99</span>
              </div>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 底部区域 -->
    <footer class="footer">
      <div class="bd">
        <van-button plain hairline size="small" text="#000">下载APP</van-button>
        <van-button plain hairline size="small" text="#000">电脑版</van-button>
      </div>

      <p>
        网易公司版权所有 © 1997-2020
        <br />食品经营许可证：JY13301080111719
      </p>
    </footer>
    <!-- 底部导航 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o ">分类</van-tabbar-item>
      <van-tabbar-item icon="good-job-o">值得买</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
      active: ''
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
<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;

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
          background-color: #ededed;
          vertical-align: middle;
          span {
            vertical-align: top;
          }
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
  .my-swipe {
    padding-top: 80px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .g-grow {
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    span {
      font-size: 12px;
    }
    img {
      vertical-align: middle;
      width: 20px;
      height: 20px;
    }
  }
  .goodsList {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    .goodsItem {
      display: flex;
      flex-direction: column;
      margin: 10px;
      font-size: 12px;
      img {
        width: 55px;
        height: 55px;
        margin-bottom: 5px;
      }
    }
  }
  .promotionModule {
    width: 100%;
    .promItem {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .floor {
      img {
        width: 50%;
      }
    }
  }
  .freshGift {
    h2 {
      padding: 10px;
      font-size: 18px;
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
  .m-popularItemModule {
    .moduleTitle {
      display: flex;
      justify-content: space-between;
      .left {
        margin-left: 10px;
        font-size: 16px;
      }
      .right {
        margin-right: 10px;
        font-size: 14px;
      }
    }
    .spItem {
      margin: 5px;
      background-color: #fef0df;
      display: flex;
      justify-content: center;
      .spItemdesc {
        padding-top: 50px;

        .name {
          text-align: left;
          width: 150px;
          margin-bottom: 5px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .desc {
          text-align: left;
          font-size: 14px;
          margin-bottom: 5px;
        }
        .price {
          text-align: left;
          color: red;
        }
      }

      img {
        width: 140px;
      }
    }
    .m-indexItem {
      .list {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .item {
          width: 118px;
          height: 209px;

          img {
            width: 118px;
            height: 118px;
          }
          .m-lazyload {
            background-color: #cccccc;
          }
          .good {
            font-size: 14px;
            .name {
              padding: 5px 0px;
              // overflow: hidden;
              // text-overflow: ellipsis;
            }
            .newItemDesc {
              display: none;
            }
            .price {
              color: red;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 155px;
    background-color: #414141;
    color: #999;
    text-align: center;
    .bd {
      width: 200px;
      margin: 0 auto;
      padding-top: 20px;
      display: flex;
      justify-content: space-evenly;
      button {
        background-color: #414141;
        color: #ffffff;
      }
    }
    p {
      margin-top: 10px;
    }
  }
}
</style>