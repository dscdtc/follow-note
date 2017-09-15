const axios = require('axios')

// Usage: getApi('bookshelf'|'detail-info', 'mFP43SIHeHWEAJecoMa5Y8aL')
exports.getApi = (info, token) => {
  const url = `http://api.zhuishushenqi.com/user/${info}?token=${token}`
  return axios.get(url)
  .then((res) => {
    return Promise.resolve(res.data)
  })
  .catch(function (error) {
    console.error(error)
  })
}
