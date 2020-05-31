import { reqcategoryLeft } from "../../../api"
const state = {
  categoryLeftData: []
}
const mutations = {
  UPDATA_categoryLeftData(state, categoryLeftData) {

    state.categoryLeftData = categoryLeftData
  }
}
const actions = {
  async reqcategoryLeftData({ commit }) {

    const result = await reqcategoryLeft()
    result.data.result
    if (result.data.code === 200) {
      console.log(result)
      commit('UPDATA_categoryLeftData', result.data.result[0])
    }
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}