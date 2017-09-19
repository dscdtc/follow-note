<template>
  <div class="app">
    <v-header></v-header>
    <div class="tab">
        <router-link to="/novel" class="tab-item">追书</router-link>
        <router-link to="/community" class="tab-item">社区</router-link>
        <router-link to="/discover" class="tab-item">发现</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
    // width 100%
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
</style>