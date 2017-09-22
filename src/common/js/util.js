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
  let q = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > q) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return [].concat(quickSort(leftArr), [q], quickSort(rightArr)) // 递归调用
}
