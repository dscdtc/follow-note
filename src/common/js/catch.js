import storage from 'best-storage'
const SEARCH_KEY = '__HISTORY__'
const SEARCH_MAX_LENGTH = 6

function insertArray (arr, query, compoile, searhMax) {
  let index = arr.findIndex(compoile)
  if (index === 0) {
    return false
  }
  if (index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(query)
  if (searhMax && arr.length > searhMax) {
    arr.pop()
  }
}

export function saveHistoy (query) {
  let searchs = storage.get(SEARCH_KEY, [])
  insertArray(searchs, query, (item) => {
    return item === query
  }, SEARCH_MAX_LENGTH)
  storage.set(SEARCH_KEY, searchs)
  return searchs
}

export function loadHistory () {
  let searchs = storage.get(SEARCH_KEY, [])
  return searchs
}

export function cleanHistory () {
  storage.remove(SEARCH_KEY)
  return []
}
