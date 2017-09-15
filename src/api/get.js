import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

const base = '/api/'

export function getInfo (info) {
  const url = base + info
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
