import * as types from './mutation-type'
import {saveHistoy, cleanHistory} from 'common/js/catch'

export const saveSearchHistoary = function ({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, saveHistoy(query))
}

export const cleanHistoary = function ({ commit }) {
  commit(types.SET_SEARCH_HISTORY, cleanHistory())
}

export const saveBookId = function ({ commit }, id) {
  commit(types.SET_BOOK_ID, id)
}

export const saveReadRecord = function ({ commit }, record) {
  commit(types.SET_READ_RECORD, null) // ###
}
