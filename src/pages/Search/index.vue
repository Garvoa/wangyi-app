<!--  -->
<template>
  <div class="wrap">
    <div class="search">
      <van-field
        v-model="value"
        left-icon="search"
        class="loginSeach"
        placeholder="搜索商品，共254615款好物"
        size="large"
        ref="input"
        @input="searchContent"
        @keyup.13="submit"
      />
      <van-icon name="cross" class="cross" @click="removeKeyword" v-if="value" />

      <span @click="clear">取消</span>
    </div>

    <div class="searchHot" :class="{ active: isActive }" v-show="searchKeyword.length===0">
      <h3>热门搜索</h3>
      <ul class="list">
        <a href v-for="(item,index) in hotKeywordVOList" :key="index">
          <li class="item" ref="Item">{{item.keyword}}</li>
        </a>
      </ul>
    </div>
    <div v-show="searchKeyword.length>0">
      <van-cell is-link :title="item" v-for="(item,index) in searchKeyword" :key="index" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      value: '',
      isActive: false
    }
  },
  methods: {
    clear() {
      this.$store.commit('DELETE_CENTENT')
      this.$store.commit('DELETE_SEARCHKEYWORD')
      this.$destroy()
    },
    searchContent() {
      this.timer
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.value) {
          this.$store.dispatch('getSearchkeyword', this.value)
        }
      }, 500)
    },
    removeKeyword() {
      this.value = ''
    },
    submit() {
      console.log(1)
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  computed: {
    ...mapGetters(['hotKeywordVOList']),
    ...mapState({ searchKeyword: state => state.search.searchKeyword })
  },
  watch: {
    hotKeywordVOList() {
      this.$nextTick(() => {
        if (this.$refs.Item) {
          this.$refs.Item.forEach((item, index) => {
            if (index % 2 === 0) {
              item.style.color = 'red'
              item.style.border = '1px solid red'
              this.isActive = true
            }
          })
        }
      })
    },
    value() {
      this.$store.commit('DELETE_SEARCHKEYWORD')
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$refs.input.focus()
    this.$store.dispatch('getSearchCentent')
  },
  destroyed() {
    const { path } = this.$route
    if (path !== '/home') {
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="less" scoped>
div {
  background-color: white;
}
.wrap {
  // height: 270px;
  transition: 0.5s;
}
.search {
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: center;
  .loginSeach {
    background-color: #eeeeee;
    width: 80%;
    padding: 5px;
    border-radius: 10px;
  }
  .cross {
    position: absolute;
    right: 75px;
    top: 20px;
  }
  span {
    width: 50px;
    text-align: center;
  }
}
h3 {
  margin: 20px;
  color: #999;
}
.searchHot {
  padding-bottom: 30px;
  transform: translateX(520px);
}
.active {
  transform: translateY(0px);
  transition: 0.5s;
}
.list {
  display: flex;
  white-space: nowrap;
  flex-wrap: wrap;
  .item {
    padding: 5px;
    margin: 5px;
    border: 1px solid #dddddd;
  }
}
.van-cell {
  padding: 10px 20px;
  border-bottom: 1px solid #dddddd;
}
/* @import url(); 引入css类 */
</style>