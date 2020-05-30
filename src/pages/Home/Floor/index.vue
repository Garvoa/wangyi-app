<!--  -->
<template>
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
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
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
/* @import url(); 引入css类 */
</style>