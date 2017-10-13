import * as types from './mutation-type'
const mutations = {
  [types.SET_SEARCH_HISTORY] (state, history) {
    state.searchHistory = history
  },
  [types.SET_BOOK_ID] (state, id) {
    state.bookId = id
  },
  [types.SET_READ_RECORD] (state, record) {
    state.readRecord = record
  }
}

export default mutations
