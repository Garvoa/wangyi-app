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
    const { data, code } = result.data
    if (code === 200) {
      console.log(result)
      commit('UPDATA_categoryLeftData', data)
    }
  }
}
const getters = {}
export default {
  state, mutations, actions, getters
}