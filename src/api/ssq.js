import http from '@/http/index'

export default {
  getSsqPageList (params) {
    return http({
      url: '/ssq/getSsqPageList',
      method: 'post',
      type: 'json',
      showError: true
    }, params)
  },
  lstj (params) {
    return http({
      url: '/ssq/lstj',
      method: 'post',
      type: 'json',
      showError: true
    }, params)
  },
  pcSsq (params) {
    return http({
      url: '/ssq/pcSsq',
      method: 'post',
      type: 'json',
      showError: true
    }, params)
  },
  getPcjd (params) {
    return http({
      url: '/ssq/getPcjd',
      method: 'post',
      type: 'json',
      showError: true
    }, params)
  }
}
