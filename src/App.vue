<template>
  <div class="app">
    <v-header></v-header>
    <div class="tab">
        <router-link to="/novel" class="tab-item">追书</router-link>
        <router-link to="/community" class="tab-item">社区</router-link>
        <router-link to="/discover" class="tab-item">发现</router-link>
    </div>
    <div class="background"></div>
    <transition name="slide">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import header from 'comp/header/header'

  export default {
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
  .app
    height 100%
    width 100%
  &.tab
    display flex
    justify-content space-between
    padding 8px 38px
    height 40px
    background #b93221
    color white
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
    & > a
      display block
      font-size 15px
      color rgba(255, 255, 255, .4)
      &.active
        color rgb(255, 255, 255)
  &.slide-enter-active, &.slide-leave-active
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  &.slide-enter
    transform: translateX(100%)
  &.slide-leave-to
    transform: translateX(-100%)
    // opacity 0
  .background
    position fixed
    top 117px
    z-index -99
    height 100%
    width 100%
    background url('./common/image/default.png')
    background-size 100%
</style>