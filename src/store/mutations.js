import * as types from './mutation-type'
const mutations = {
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  }
}

export default mutations
