<template>
  <div>
    <div class="header">
      <h1 class="title">
        <!-- <i class="logo icon-zhuishushenqi" /><span>书 神 器</span> -->
        <img class="logo" src="./asstes/logo.png" alt="追书神器">
      </h1>
      <div class="button-wrapper">
        <i @click="toSearch"class="button icon-search" />
        <i @click="showUser=!showUser" class="button icon-more" />
      </div>
    </div>
    <div @click="showUser=!showUser" v-if="showUser" class="cover"></div>
    <transition name="scale">
      <ul class="user" v-if="showUser">
        <li class="opt-wrapper">
          <img width="20" height="20" class="avatar" v-lazy="proxyUrl+user.avatar" />
          <span class="option">{{user.nickname}}</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-lingdang" />
          <span class="option">我的消息</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-sync" />
          <span class="option">同步书架</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-photo" />
          <span class="option">扫描本地书籍</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-wifi" />
          <span class="option">WIFI传书</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-info" />
          <span class="option">意见反馈</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-night" />
          <span class="option">夜间模式</span>
        </li>
        <li class="opt-wrapper">
          <i class="icon icon-setting" />
          <span class="option">设置</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import {getInfo} from 'api/get'

export default {
  name: 'header',
  data () {
    return {
      user: {},
      showUser: false,
      proxyUrl: 'http://statics.zhuishushenqi.com'
    }
  },
  created () {
    this._getUser()
  },
  methods: {
    _getUser () {
      getInfo('user')
      .then((res) => {
        if (res.ok === true) {
          this.user = res
        }
      })
    },
    toSearch () {
      console.log(12312313)
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .header
    display flex
    // width 100%
    justify-content space-between
    padding 10px 14px
    line-height 32px
    background #b93221
    font-size 0
    color white
    .title
      .logo
        display inline-flex
        height 22px
        vertical-align bottom
    .button-wrapper
      .button
        display inline-flex
        // line-height 32px
        padding 8px
        font-weight 600
        font-size 20px
  .cover
    position fixed
    top 0
    height 100%
    width 100%
    z-index 99
    // 背景虚化iOS
    backdrop-filter blur(10px)
    background rgba(7, 17, 27, .6)
  .user
    position fixed
    top 56px
    right 5px
    width 192px
    padding 0 13px
    z-index 999
    background #fff
    border-radius 3px
    transform translate3d(0, 0, 0)
    transform-origin 100% 0 0 //设置缩放中心
    &.scale-enter-active
        animation: bounce-in .3s
    &.scale-leave-active
        animation: bounce-in .3s reverse
    @keyframes bounce-in
      0%
        transform: scale(0)
      50%
        transform: scale(1.1)
      100%
        transform: scale(1)
    .opt-wrapper
      font-size 16px
      border-1px(rgba(7,17,27,.1))
      .avatar
        vertical-align text-bottom
        border-radius 50%
      .icon
        color #8c857e
      .option
        padding-left 12px
        line-height 52px
        color #212121
      &:last-child
        border-none()
</style>
