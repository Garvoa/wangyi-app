<!--  -->
<template>
  <div>
    <header>
      <a href class="home">
        <van-icon name="home-o" size="0.3rem" />
      </a>
      <span>{{isRegister?"注册":'登录'}}</span>

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
    <van-form @submit="onSubmit(user)" class="form">
      <van-field
        v-model="user.username"
        name="pattern"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ pattern, message: '4到16位（字母，数字，下划线，减号）' }]"
      />
      <van-field
        v-model="user.password"
        name="pattern"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ pattern, message: '4到16位（字母，数字，下划线，减号）' }]"
      />
      <van-field
        v-if="isRegister"
        v-model="user.password2"
        name="pattern"
        placeholder="请输入确定密码"
        label="确认密码"
        :rules="[{ pattern, message: '4到16位（字母，数字，下划线，减号）' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  props: {
    onSubmit: Function,
    isRegister: Boolean
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        password2: ''
      },
      pattern: /[a-zA-Z0-9_-]{6,10}/
    }
  },
  methods: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
}
</script>
<style lang="less" scoped>
header {
  width: 90%;
  padding: 10px 5%;
  position: relative;
  overflow: hidden;
  background-color: white;
  span {
    text-align: center;
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
}

/* @import url(); 引入css类 */
</style>