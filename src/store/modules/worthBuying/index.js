/* eslint-disable no-unused-vars */
import { reqWorthBuying, reqWorthBuyingList } from "../../../api"
const state = {
  WorthBuyingData: [],
  WorthBuyingList: {
    result: []
  }
}
const mutations = {
  UPDATA_WorthBuyingData(state, WorthBuyingData) {
    let WorthBuyingDataArr = []
    WorthBuyingData.forEach((item, index, arr) => {
      if (Number(index % 2) === 0) {
        WorthBuyingDataArr[index] = [item, arr[index + 1]]
        if (index === arr.length - 1) {
          state.WorthBuyingData = WorthBuyingDataArr.filter((item) => {
            return item !== ''
          })
        }
      }
    })
  },
  UPDATA_WorthBuyingList(state, WorthBuyingList) {
    WorthBuyingList.result.forEach((item) => {
      state.WorthBuyingList.result.push(item)
    })
    // state.WorthBuyingList = WorthBuyingList
  }
}
const actions = {
  async reqreqWorthBuyingData({ commit }) {

    const result = await reqWorthBuying()
    const { data, code } = result.data
    if (code === 200) {
      console.log(result)
      commit('UPDATA_WorthBuyingData', data[0].data.navList)
    }
  },

  async getWorthBuyingList({ commit }, perPage) {
    return reqWorthBuyingList(perPage)

  }
}
const getters = {
  // WorthBuyingresult(state) {
  //   state.WorthBuyingList ? state.WorthBuyingList.result : []
  // }
}
export default {
  state, mutations, actions, getters
}