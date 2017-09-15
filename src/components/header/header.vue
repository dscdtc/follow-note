<template>
  <div>
    <div class="header">
      <h1 class="title">
        <!-- <i class="logo icon-zhuishushenqi" /><span>书 神 器</span> -->
        <img class="logo" src="./asstes/logo.png" alt="追书神器">
      </h1>
      <div class="button-wrapper">
        <i class="button icon-search" />
        <i @click="showUser=!showUser" class="button icon-more" />
      </div>
    </div>
    <transition name="scale">
      <ul class="user" v-if="showUser">
        <li>
          <img class="avatar" v-lazy="proxyUrl+user.avatar" />
          <span class="username">{{user.nickname}}</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">我的消息</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">同步书架</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">扫描本地书籍</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">WIFI传书</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">夜间模式</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">设置</span>
        </li>
        <li>
          <i class="icon" />
          <span class="option">我的消息</span>
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
    this._getUser
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    display flex
    // width 100%
    justify-content space-between
    padding 12px
    line-height 32px
    background #b93221
    color white
    .title
      font-size 18px
      font-weight 700
      .logo
        display inline-block
        height 22px
        vertical-align middle
    .button-wrapper
      line-height 32px
      font-weight 700
      .button
        padding 8px
        font-size 22px
</style>
