<!--  -->
<template>
  <div>
    <template>
      <div>
        <p>
          <vxe-button @click="loadList(200)">1w</vxe-button>
          <vxe-button @click="loadList(50000)">5w</vxe-button>
          <vxe-button @click="loadList(100000)">10w</vxe-button>
          <vxe-button @click="loadList(200000)">20w</vxe-button>
          <vxe-button @click="loadList(500000)">50w</vxe-button>
        </p>
        <vxe-list height="640" class="my-list" :loading="loading" :data="list" ref="res">
          <template v-slot="{ items }">
            <div class="my-list-item" v-for="(item, index) in items" :key="index">{{ item.label }}</div>
          </template>
        </vxe-list>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },
  created() {
    this.loadList(100)
  },
  methods: {
    loadList(size) {
      this.loading = true
      setTimeout(() => {
        var list = []
        for (var index = 0; index < size; index++) {
          list.push({
            id: index,
            label: `row_${index}`
          })
        }
        const startTime = Date.now()
        this.list = list
        this.loading = false
        this.$nextTick(() => {
          console.log(`渲染 ${size} 条，用时 ${Date.now() - startTime} 毫秒`)
        })
      }, 300)
    },
    aada() {
      const a = document.getElementsByClassName('vxe-list--y-space')
      console.log(a[0])
    }
  },
  mounted() {
    window.addEventListener('scroll', this.aada, true)
  }
}
</script>
<style lang="less" scoped>
.my-list {
  border: 1px solid #e8eaec;
  background: #fff;
}
.my-list .my-list-item {
  height: 28px;
  padding-left: 15px;
}
.vxe-list .vxe-list--body {
  height: 100%;
}
/* @import url(); 引入css类 */
</style>