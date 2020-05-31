<!--  -->
<template>
  <div class="loginmodule">
    <header>
      <a href class="home">
        <van-icon name="home-o" size="0.3rem" />
      </a>
      <span>网易严选</span>

      <a href class="shopping">
        <van-icon name="cart-o" size="0.3rem" />
      </a>
      <a href class="search">
        <van-icon name="search" size="0.3rem" />
      </a>
    </header>
    <div class="logo">
      <img src="../../assets/39c5e4583753d4c3cb868a64c2c109ea.png" alt />
    </div>
    <div class="login">
      <div class="van-cell-1">
        <van-field
          v-model="username"
          name="pattern"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ pattern, message: '4到16位（字母，数字，下划线，减号）' }]"
        />
        <van-field
          v-model="password"
          name="pattern"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ pattern, message: '4到16位（字母，数字，下划线，减号）' }]"
        />
      </div>
      <van-button type="danger" @click="onSubmit">登录</van-button>
      <van-button plain hairline color="red" type="info" @click="toRegiser">立即注册</van-button>
    </div>
    <div class="qitalogin">
      <div>
        <a href>
          <span class="iconfont icon-qq"></span>
          <span>QQ</span>
        </a>
      </div>
      <div>
        <a href>
          <span class="iconfont icon-weixin"></span>
          <span>微信</span>
        </a>
      </div>
      <div>
        <a href>
          <span class="iconfont icon-tubiaozhizuo-"></span>
          <span>微博</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pattern: /[a-zA-Z0-9_-]{6,10}/,
      username: '',
      password: ''
    }
  },
  methods: {
    toRegiser() {
      this.$router.push({ path: '/register' })
    },

    async onSubmit() {
      const user = {
        username: this.username,
        password: this.password
      }
      const result = await this.$store.dispatch('reqLoginUser', user)
      const { code, data, msg } = result.data

      if (code === 200) {
        this.$store.commit('USER_INFO', data)
        window.localStorage.setItem('token', data.Token)
        this.$toast(msg)
        this.$router.push({ path: '/user' })
      } else {
        this.$toast(msg)
      }
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
.loginmodule {
  width: 100%;
  height: 100%;
  header {
    width: 90%;
    padding: 10px 5%;
    position: relative;
    overflow: hidden;
    background-color: white;
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
  .logo {
    width: 100%;
    padding: 100px 0px;
    text-align: center;
    img {
      width: 140px;
    }
    .van-cell-1 {
      width: 90%;
    }
  }
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    button {
      width: 90%;
      margin-top: 20px;
    }
  }
  .qitalogin {
    display: flex;
    margin-top: 150px;
    justify-content: center;
    color: #7f7f7f;
    div {
      &:nth-child(2) {
        border-left: 1px solid #7f7f7f;
        border-right: 1px solid #7f7f7f;
      }
      width: 25%;
      text-align: center;
      span {
        margin-left: 5px;
      }
    }
  }
}

/* @import url(); 引入css类 */
</style>