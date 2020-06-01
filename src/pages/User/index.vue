<!--  -->
<template>
  <div class="wrap">
    <header>
      <div class="user">
        <div class="userleft">
          <img src="../../assets/touxiang.png" alt />
          <div>
            <p>网易严选1358964833</p>
            <span>普通用户</span>
          </div>
        </div>
        <div class="userright">
          <span class="span1">
            <van-icon name="invition" size="0.2rem" />
          </span>

          <div class="diamond">
            <van-icon name="diamond" size="0.2rem" />
            <p>Pro会员</p>
            <p>立即试用</p>
          </div>
        </div>
      </div>
    </header>
    <section>
      <div class="myAsset">
        <span class="mymoney">我的资产</span>

        <ul class="assetList">
          <li>
            <p>￥0</p>
            <p>回馈金</p>
          </li>
          <li>
            <p>0</p>
            <p>红包</p>
          </li>
          <li>
            <p>0</p>
            <p>优惠券</p>
          </li>
          <li>
            <p>￥0</p>
            <p>津贴</p>
          </li>
          <li>
            <p>0</p>
            <p>礼品卡</p>
          </li>
        </ul>
      </div>
      <div class="myuMenu">
        <ul class="list">
          <a href="javascript:;">
            <li class="item active">
              <i class="icon-m"></i>
              <span>我的订单</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>购卡白赚30元</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>周六一起拼</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>售后服务</span>
            </li>
          </a>

          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>邀请返利</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>优选购</span>
            </li>
          </a>

          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>积分中心</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>会员俱乐部</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>地址管理</span>
            </li>
          </a>

          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>账号安全</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>帮助与客服</span>
            </li>
          </a>
          <a href="javascript:;">
            <li class="item">
              <i class="icon-m"></i>
              <span>意见反馈</span>
            </li>
          </a>
        </ul>
      </div>
    </section>
    <footer>
      <van-button @click="signOut">退出登录</van-button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    signOut() {
      this.$dialog
        .confirm({
          title: '',
          message: '是否退出登录'
        })
        .then(() => {
          this.$store.commit('DELELT_USER_INFO')
          window.localStorage.removeItem('token')
          this.$router.push({ path: '/login' })
        })
        .catch(() => {})
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
.wrap {
  overflow: hidden;
}
.user {
  width: 100%;
  height: 150px;
  background-image: url('../../assets/beijing.png');
  display: flex;
  justify-content: space-between;
  .userleft {
    display: flex;
    margin-top: 30px;
    margin-left: 20px;
    position: relative;
    .span1 {
      position: absolute;
      right: 20px;
    }
    img {
      border-radius: 50%;
      width: 70px;
      height: 70px;
    }
    div {
      padding-top: 10px;
      color: #fff;
      p {
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 20px;
      }
      span {
        font-size: 16px;
      }
    }
  }
  .userright {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    p {
      text-align: right;
      color: #f9e0c0;
    }
    div {
      animation: name 1s 10;
      position: relative;
      width: 82px;
      border-radius: 50% 0 0 50%;
      height: 30px;
      background-color: #574e44;
      padding-top: 10px;
      padding-bottom: 10px;
      .van-icon {
        position: absolute;
        left: 10px;
        top: 15px;
      }
    }
  }
}
.myAsset {
  background-color: white;
  padding-bottom: 20px;
}
.mymoney {
  display: block;
  padding: 20px;
  height: 30px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    transform: scaleY(0.3);
    position: absolute;
    bottom: 10px;
    background-color: #000;
    left: 10px;
  }
}
.assetList {
  overflow: hidden;
  padding-top: 20px;
  li {
    float: left;
    width: 20%;

    text-align: center;

    span {
      color: red;
    }
  }
}
.myuMenu {
  width: 100%;
  margin-top: 10px;
  background-color: white;
  overflow: hidden;
  .list {
    a {
      text-decoration: none;
      color: #333;
    }
    .item {
      width: 33%;
      height: 90px;
      float: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      border-right: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
      &:nth-child(1) {
        .icon-m {
          background-position: 8px;
          background-position-y: -438.7px;
        }
      }
      &:nth-child(2) {
        .icon-m {
          background-position: 8px;
          background-position-y: -466px;
        }
      }
      &:nth-child(3) {
        .icon-m {
          background-position: 8px;
          background-position-y: -494.7px;
        }
      }
      &:nth-child(4) {
        .icon-m {
          background-position: 8px;
          background-position-y: -524.7px;
        }
      }
      &:nth-child(5) {
        .icon-m {
          background-position: 8px;
          background-position-y: -553.7px;
        }
      }
      &:nth-child(6) {
        .icon-m {
          background-position: 8px;
          background-position-y: -581.7px;
        }
      }
      &:nth-child(7) {
        .icon-m {
          background-position: 8px;
          background-position-y: -610.7px;
        }
      }
      &:nth-child(8) {
        .icon-m {
          background-position: 8px;
          background-position-y: -408.7px;
        }
      }
      &:nth-child(9) {
        .icon-m {
          background-position: 8px;
          background-position-y: -382px;
        }
      }
      &:nth-child(10) {
        .icon-m {
          background-position: 8px;
          background-position-y: -355px;
        }
      }
      &:nth-child(11) {
        .icon-m {
          background-position: 8px;
          background-position-y: -328px;
        }
      }
      &:nth-child(12) {
        .icon-m {
          background-position: 8px;
          background-position-y: -298px;
        }
      }

      .icon-m {
        width: 40px;
        height: 30px;
        background-image: url('../../assets/7a838705-f2cd-4bf2-9a86-60eaa85e7241.png');
        background-size: 40px, 30px;
        background-repeat: no-repeat;
      }
    }
  }
}
footer {
  button {
    width: 100%;
    height: 50px;
    margin: 20px 0px 60px 0;
  }
}
@keyframes name {
  0% {
    font-size: 12px;
  }
  50% {
    font-size: 16px;
  }
  100% {
    font-size: 12px;
  }
}
/* @import url(); 引入css类 */
</style>