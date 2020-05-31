<!--  -->
<template>
  <div>
    <loginAndregister :user="user" :onSubmit="onSubmit" :isRegister="isRegister" />
  </div>
</template>

<script>
import loginAndregister from '../../components/loginAndregister'
export default {
  components: {
    loginAndregister
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        password2: ''
      },
      isRegister: true
    }
  },
  methods: {
    async onSubmit(user) {
      if (user.password !== user.password2) {
        console.log(1)
        this.$toast('两次密码不一致')
        return
      }
      const result = await this.$store.dispatch('reqRegisterUser', user)
      const { code, data, msg } = result.data

      if (code === 200) {
        this.$store.commit('USER_INFO', data)
        this.$toast(msg)
        this.$router.push({ path: '/login' })
      } else {
        this.$toast(msg)
      }
    }
  }
}
</script>
<style lang="less" scoped>
/* @import url(); 引入css类 */
</style>