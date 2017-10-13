// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

/**
 * shuffle an array
**/
export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = (Math.random() * (i + 1)) >>> 0
    // [_arr[i], _arr[j]] = [_arr[j], _arr[i]]
    let temp = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = temp
  }
  return _arr
}

// Knuth-Durstenfeld shuffle
// function shuffle (arr) {
//   let n = arr.length, random;
//   while(0!=n){
//       random =  (Math.random() * n--) >>> 0; // 无符号右移位运算符向下取整
//       [arr[n], arr[random]] = [arr[random], arr[n]] // ES6的结构赋值实现变量互换
//   }
//   return arr;
// }

/**
 * unique an array
 * Use Object's key value
**/
export function unique (arr) {
  let hashTable = {}
  let data = []
  for (let i = 0; i < arr.length; i++) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = true
      data.push(arr[i])
    }
  }
  return data
}

/**
 * sort an array
**/
export function bubbleSort (arr) {
  for (let i = 0, l = arr.length; i < l; i++) {
    for (let j = i + 1; j < l; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

export function quickSort (arr) {
  if (arr.length <= 1) {
    return arr
  }
  let leftArr = []
  let rightArr = []
  let q = new Date(arr[0].updated)
  for (let i = 1; i < arr.length; i++) {
    let p = new Date(arr[i].updated)
    if (p < q) { // >从大到小；<从小到大
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return [].concat(quickSort(leftArr), [arr[0]], quickSort(rightArr)) // 递归调用
}

export function computeTime (utc) {
  // UTC时间字符串："2017-06-18T07:33:57.921Z"
  // let timeStr = updated.split('.')[0].replace(/-/g, '/').replace('T', ' ')
  // let oldDate = new Date(timeStr)
  let oldDate = new Date(utc)
  let nowDate = new Date()
  let days = ((nowDate - oldDate) / (1000 * 3600 * 24)) >>> 0
  if (days) {
    return `${days}天前`
  }
  let hours = ((nowDate - oldDate) / (1000 * 3600)) >>> 0
  if (hours) {
    return `${hours}小时前`
  }
  let minutes = ((nowDate - oldDate) / (1000 * 60)) >>> 0
  if (minutes) {
    return `${minutes}分钟前`
  } else {
    return '刚刚'
  }
}
