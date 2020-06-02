import { reqSearchCentent, reqSearchkeyword, reqSearchkeywordList, reqLoadingList, reqDescList } from "../../../api"
const state = {
  centenInit: {},
  searchKeyword: [],
  KeywordGoodsList: {
    directlyList: []
  },
  isNulldirectlyList: false,
  isLoading: false
}
const mutations = {
  UPDATE_CENTENT_INIT(state, data) {
    state.centenInit = data
  },
  DELETE_CENTENT(state) {

    state.centenInit = {}
  },
  UPDATE_SEARCHKEYWORD(state, data) {
    state.searchKeyword = data
  },
  DELETE_SEARCHKEYWORD(state) {
    state.searchKeyword = []
  },
  SEARCH_KEYWORD_LIST(state, data) {
    console.log(data)
    state.KeywordGoodsList = data
  },
  UPDATE_SEARCH_KEYWORD_LIST(state, data) {
    data.directlyList.forEach((item) => {
      state.KeywordGoodsList.directlyList.push(item)
    })

  },
  DELETE_KeywordGoodsList(state) {
    state.KeywordGoodsList = {
      directlyList: []
    }
  },
  // UPDATE_isNulldirectlyList(state) {
  //   state.isNulldirectlyList = true
  // }

}
const actions = {
  async getSearchCentent({ commit }, user) {
    const result = await reqSearchCentent(user)
    const { code, data } = result.data
    if (code * 1 === 200) {
      commit('UPDATE_CENTENT_INIT', data)
    }
  },
  // eslint-disable-next-line no-unused-vars
  async getSearchkeyword({ commit }, value) {
    const result = await reqSearchkeyword(value)
    const { data, code } = result.data
    if (code * 1 === 200) {
      commit('UPDATE_SEARCHKEYWORD', data)
    }
  },
  // eslint-disable-next-line no-unused-vars
  async getSearchkeywordList({ commit }, [keyword, size]) {

    return reqSearchkeywordList(keyword, size)
  },

  // eslint-disable-next-line no-unused-vars
  async getLoadingList({ commit }, [keyword, size, id]) {
    return reqLoadingList(keyword, size, id)

  },
  // eslint-disable-next-line no-unused-vars
  async getDescList({ commit }, Sortobj) {
    return reqDescList({ ...Sortobj })

  }
}
const getters = {
  hotKeywordVOList(state) {

    return state.centenInit ? state.centenInit.hotKeywordVOList : []
  },
  directlyList(state) {
    if (state.KeywordGoodsList) {
      if (state.KeywordGoodsList.directlyList !== null) {
        state.isNulldirectlyList = false
        return state.KeywordGoodsList.directlyList
      } else {
        //当数组为空时显示没有数据的图片
        state.isNulldirectlyList = true
        return []
      }
    } else {
      return []
    }
  },
  directOrginQuery(state) {
    return state.KeywordGoodsList ? state.KeywordGoodsList.directOrginQuery : ''
  },
  categoryL1List(state) {
    return state.KeywordGoodsList ? state.KeywordGoodsList.categoryL1List : []
  }
}
export default {
  state, mutations, actions, getters
}