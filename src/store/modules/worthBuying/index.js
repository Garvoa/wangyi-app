import { reqWorthBuying } from "../../../api"
const state = {
  WorthBuyingData: []
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
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}