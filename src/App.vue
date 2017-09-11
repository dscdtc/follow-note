<template>
  <div>
    <v-header></v-header>
    <div class="tab">
        <router-link to="/novel" class="tab-item">追书</router-link>
        <router-link to="/community" class="tab-item">社区</router-link>
        <router-link to="/discover" class="tab-item">发现</router-link>
    </div>
    <router-view :novels="novels"></router-view>
  </div>
</template>

<script>
  import header from 'comp/header/header.vue'
  import {getInfo} from 'api/get'

  const ERR_OK = 0

  export default {
    data () {
      return {
        novels: []
      }
    },
    created () {
      this._getNovels()
    },
    methods: {
      _getNovels () {
        getInfo('novels')
        .then((res) => {
          if (res.errno === ERR_OK) {
            this.novels = res.data || []
          }
        })
      }
    },
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
    background #b93221
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
      color rgba(255, 255, 255, .4)
      &.active
        color rgb(255, 255, 255)
</style>