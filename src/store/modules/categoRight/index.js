import { reqcategoryRight } from "../../../api"
const state = {
  categoryRightData: []
}
const mutations = {
  UPDATA_categoryRightData(state, categoryRightData) {

    state.categoryRightData = categoryRightData
  }
}
const actions = {
  async reqcategoryRightData({ commit }) {

    const result = await reqcategoryRight()
    const { data, code } = result.data
    if (code === 200) {
      // console.log(result)
      commit('UPDATA_categoryRightData', data)
    }
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}