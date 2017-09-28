import * as types from './mutation-type'
import {saveHistoy, cleanHistory} from 'common/js/catch'

export const saveSearchHistoary = function ({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, saveHistoy(query))
}

export const cleanHistoary = function ({ commit }) {
  commit(types.SET_SEARCH_HISTORY, cleanHistory())
}
