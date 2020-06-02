<!--  -->
<template>
  <div class="wrap">
    <!-- 搜索框 -->
    <div class="search">
      <router-link to="/home">
        <van-icon name="wap-home-o" size="0.3rem" />
      </router-link>
      <van-field
        v-model="value"
        left-icon="search"
        class="loginSeach"
        placeholder="搜索商品，共254615款好物"
        size="large"
        ref="input"
        @input="searchContent"
        @keyup.13="getKeyWordList"
        @focus="isfcous=true"
      />
      <van-icon name="cross" class="cross" @click="removeKeyword" v-if="value" />
    </div>
    <!-- 热门搜索 -->
    <div v-show="directlyList.length===0 &&!value&&isfcous">
      <div class="searchHot" :class="{ active: isActive }" v-show="searchKeyword.length===0">
        <h3>热门搜索</h3>
        <ul class="list">
          <a href="javascript:;" v-for="(item,index) in hotKeywordVOList" :key="index">
            <li class="item" ref="Item" @click="getKeyWordList(item.keyword)">{{item.keyword}}</li>
          </a>
        </ul>
      </div>
    </div>
    <!-- 关键字列表 -->
    <div v-show="isfcous" class="searchkey">
      <van-cell
        is-link
        :title="item"
        v-for="(item,index) in searchKeyword"
        :key="index"
        @click="getKeyWordList(item)"
      />
    </div>
    <div v-show="directlyList.length>0 &&!isfcous">
      <!-- 价格，综合，分类 -->
      <div class="conditions">
        <div class="list">
          <div
            :class="{active: typeChoiceActive===index}"
            @click="typeChoice(index)"
            v-for="(item,index) in conditions"
            :key="index"
          >{{item}}</div>
        </div>
        <div class="conditionsDesc" v-show="typeChoiceActive===1&&isSort">
          <div>
            <span>筛选</span>
            <input type="number" name placeholder="最低价" v-model="floorPrice" /> 一
            <input type="number" name placeholder="最高价" v-model="upperPrice" />
          </div>
          <div class="sort">
            <span>排序</span>
            <van-radio-group v-model="descSorted" style="display:flex">
              <van-radio name="true" style="margin:0px 40px 10px 20px">从高到低</van-radio>
              <van-radio name="false" style="margin:0px 20px 10px 40px">从低到高</van-radio>
            </van-radio-group>
          </div>
          <div class="btn">
            <van-button type="danger" @click="typeChoice">取消</van-button>
            <van-button type="info" @click="submitSort">确定</van-button>
          </div>
        </div>
        <div class="conditionscategory" v-show="typeChoiceActive===2">
          <van-button
            v-for="(item,index) in categoryL1List"
            :key="index"
            :class="{active: categoryActive===index}"
            @click="submitSort(item.id,index)"
          >{{item.name}}</van-button>
        </div>
      </div>
      <van-overlay
        :show="isSort"
        @click="()=>{isSort = false, typeChoiceActive=-1}"
        style="z-index: 8;"
      />
      <!-- 长列表 -->
      <Listslide
        v-if="directlyList.length>0"
        :directlyList="directlyList"
        ref="list"
        :onLoad="onLoad"
      />
    </div>
    <!-- 无结果 -->
    <div class="noResults" v-if="isNulldirectlyList &&!isLoading">
      <img src="../../assets/wujieguo.png" alt />
    </div>
    <!-- 加载 -->
    <div class="loading" v-show="isLoading">
      <van-loading type="spinner" color="#1989fa" size="54" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import Listslide from '../../components/List'
export default {
  components: { Listslide },
  data() {
    return {
      value: '',
      isActive: false,
      size: 40,
      isSort: false,
      typeChoiceActive: 0,
      conditions: ['综合', '价格', '分类'],
      isfcous: false,
      item: this.directOrginQuery,
      loading: false,
      finished: false,
      id: '',
      upperPrice: '',
      floorPrice: '',
      descSorted: false,
      sortType: 0,
      categoryActive: 0,
      categoryId: 0,
      isLoading: false
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== '/search') {
      this.$destroy()
      this.$store.commit('DELETE_CENTENT')
      this.$store.commit('DELETE_SEARCHKEYWORD')
      this.$store.commit('DELETE_KeywordGoodsList')
      next()
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      this.id = this.directlyList[0].id
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(async () => {
        const result = await this.$store.dispatch('getLoadingList', [
          this.directOrginQuery,
          this.size,
          this.id
        ])
        const { code, data } = result.data

        if (code * 1 === 200) {
          this.$store.commit('UPDATE_SEARCH_KEYWORD_LIST', data)
          if (data.directlyList.length < 0) {
            // 加载状态结束
            // 数据全部加载完成
            this.$refs.list && this.$refs.list.isLoading()
          } else {
            // 加载状态结束
            // 数据全部加载完成
            this.$refs.list.isLoading()
          }
        }
      }, 500)
    },
    searchContent() {
      this.timer
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.value) {
          this.isfcous = true
          this.$store.dispatch('getSearchkeyword', this.value)
        }
      }, 500)
    },
    removeKeyword() {
      this.$store.commit('DELETE_SEARCHKEYWORD')
      this.$store.commit('DELETE_KeywordGoodsList')
      this.value = ''
    },
    async getKeyWordList(item) {
      const { size, value } = this
      this.isLoading = true
      const keyword = typeof item === 'string' ? item : value
      this.$store
        .dispatch('getSearchkeywordList', [keyword, size])
        .then(result => {
          const { code, data } = result.data
          if (code * 1 === 200) {
            // this.isLoading = false
            this.$store.commit('SEARCH_KEYWORD_LIST', data)
          }
        })
      this.value = keyword
      this.isfcous = false
      this.$router.replace({ query: { keyword } })
    },

    typeChoice(num) {
      if (num === 1) {
        // console.log(1)
        this.isSort = true
      } else if (num === 2) {
        // this.categoryId = num
        this.isSort = true
        this.clearData()
      } else if (num === 0) {
        this.categoryId = 0
        this.submitSort(0)
        this.clearData()

        this.isSort = false
      } else {
        this.isSort = false
      }

      this.typeChoiceActive = num
    },
    leaveInput() {
      console.log(1)
      setTimeout(() => {
        this.isfcous = false
      }, 0)
    },
    submitSort(num, index) {
      const flag = typeof num === 'number'
      const Sortobj = {
        keyword: this.directOrginQuery,
        size: this.size,
        sortType: flag ? 0 : this.descSorted === 'true' ? 1 : 0,
        floorPrice: flag ? -1 : this.floorPrice || -1,
        upperPrice: flag ? -1 : this.upperPrice || -1,
        descSorted: flag ? false : this.descSorted || false,
        categoryId: flag ? num : this.categoryId
      }
      console.log(this.categoryId, num, Sortobj.categoryId)
      if (flag) {
        this.categoryActive = index
        this.typeChoiceActive = -1
      }
      this.isLoading = true
      this.$store.commit('DELETE_KeywordGoodsList')
      this.$store.dispatch('getDescList', Sortobj).then(result => {
        const { code, data } = result.data
        this.isLoading = false
        if (code * 1 === 200) {
          this.isLoading = false
          this.$store.commit('SEARCH_KEYWORD_LIST', data)
        }
      })
      this.isSort = false
    },
    clearData() {
      this.descSorted = ''
      this.upperPrice = ''
      this.floorPrice = ''
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  computed: {
    ...mapGetters([
      'hotKeywordVOList',
      'directlyList',
      'directOrginQuery',
      'categoryL1List'
    ]),
    ...mapState({
      searchKeyword: state => state.search.searchKeyword,
      isNulldirectlyList: state => state.search.isNulldirectlyList
    })
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
      if (!this.value) {
        this.$store.commit('DELETE_SEARCHKEYWORD')

        this.$store.commit('DELETE_KeywordGoodsList')
      }
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    this.$refs.input.focus()
    this.$store.dispatch('getSearchCentent')
  }
}
</script>
<style lang="less" scoped>
.wrap {
  transition: 0.5s;
  background-color: white;
  // overflow-x: hidden;
  height: 100%;
}
.search {
  background-color: white;
  padding: 10px 20px;
  position: absolute;
  z-index: 8;
  width: 100%;
  top: 0px;
  height: 40px;
  display: flex;
  align-items: center;

  .loginSeach {
    position: absolute;
    background-color: #eeeeee;
    width: 60%;
    padding: 5px;
    border-radius: 10px;
    left: 15%;
  }
  .cross {
    position: absolute;
    right: 120px;
    top: 25px;
  }
  span {
    width: 30px;
    text-align: center;
    margin-left: 10px;
    position: absolute;
    right: 15%;
  }
}
.searchkey {
  position: absolute;
  z-index: 19;
  width: 100%;

  margin-top: 60px;
}
h3 {
  margin-top: 100px;
  padding: 10px;
  margin: 70px 20px 0 20px;
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
.conditions {
  position: absolute;
  top: 60px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  background-color: #dddddd;
  border-top: 2px solid #dddddd;

  button {
    border-radius: 10px;
  }
  .list {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    div {
      margin: 0px 45px;
      font-size: 16px;
    }
  }
  .active {
    color: red;
  }
  .conditionsDesc {
    padding-bottom: 10px;
    input {
      width: 130px;
      margin: 10px;
      height: 30px;
      border-radius: 10px;
      border: 1px solid #dddddd;
      text-align: center;
    }
    .btn {
      display: flex;
      justify-content: space-evenly;
    }
    .sort {
      display: flex;
    }
  }
  .conditionscategory {
    padding: 10px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background-color: #dddddd;
    button {
      height: 30px;
      margin: 5px 20px;
    }
  }
}
.noResults {
  height: 100%;
  text-align: center;
}
.loading {
  // position: absolute;
  // top: 200px;
  z-index: 8;
  text-align: center;
  width: 100%;
  height: 400px;
  line-height: 400px;
}

/* @import url(); 引入css类 */
</style>