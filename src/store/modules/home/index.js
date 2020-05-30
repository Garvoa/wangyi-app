import { reqHome } from "../../../api"
const state = {
  homeData: []
}
const mutations = {
  UPDATA_HOMEDATA(state, homeData) {

    state.homeData = homeData
  }
}
const actions = {
  async reqHomeData({ commit }) {

    const result = await reqHome()
    const { data, code } = result.data
    if (code === 200) {
      // console.log(result)
      commit('UPDATA_HOMEDATA', data)
    }
  }
}
const getters = {
  getkingKongList(state) {
    return state.homeData[0] ? state.homeData[0].kingKongModule.kingKongList : []

  },
  getindexActivityModule(state) {
    return state.homeData[0] ? state.homeData[0].indexActivityModule : []
  },
  getpolicyDescList(state) {
    return state.homeData[0] ? state.homeData[0].policyDescList : []
  }
  ,
  getflashSaleModule(state) {
    return state.homeData[0] ? state.homeData[0].flashSaleModule : []
  },
  getnewItemList(state) {
    return state.homeData[0] ? state.homeData[0].newItemList : []
  },
  getfocusList(state) {
    return state.homeData[0] ? state.homeData[0].focusList : []
  }


}
export default {
  state, mutations, actions, getters
}