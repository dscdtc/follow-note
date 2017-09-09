<template>
  <div>
    <v-header :user="user"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/novel">追书</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/community">社区</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/discover">发现</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import header from 'comp/header/header.vue'

  export default {
    components: {
      'v-header': header
    }
  }

</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
  .tab
    display flex
    width 100%
    height 40px
    background red
    color white
    line-height 40px
    // border-bottom 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        font-weight blod
        color rgba(255, 255, 255, .6)
        text-decoration none
        &.router-link-active
          color rgb(255, 255, 255)
</style>