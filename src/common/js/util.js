// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }

export function shuffle (arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = Math.floor(Math.random() * (i + 1))
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
