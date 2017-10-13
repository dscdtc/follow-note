<template>
  <transition name="slide">
    <div class="srclist">
      <div class="header">
        <i @click="back" class="icon icon-back" />
        <h2 class="title">选择来源</h2>
      </div>
      <div class="func">
        <div class="func-item">
          <i class="icon icon-zssq" />
          <span class="name">优质源</span>
        </div>
        <div class="func-item">
          <i class="icon icon-lingdang" />
          <span class="name">自动选择</span>
        </div>
      </div>
      <div class="total">共搜索到{{sources.length}}个网站</div>
      <scroll
        class="source-list"
        :data="sources"
        v-if="sources.length"
      >
        <ul>
          <li class="source-item" v-for="source in sources">
            <i class="icon">{{source.host.slice(0, 1).toUpperCase()}}</i>
            <div class="info">
              <h3 class="title">【{{source.name}}】{{source.host}}</h3>
              <span class="update">{{computeTime(source.updated)}}: {{source.lastChapter}}</span>
            </div>
          </li>
        </ul>
      </scroll>
    </div>
  </transition>
</template>

<script>
  import scroll from 'comp/scroll/scroll'
  import {getInfo} from 'api/get'
  export default {
    data () {
      return {
        sources: []
      }
    },
    // keep-alive's lifecycle function
    activated () {
      this._getSources()
    },
    deactivated () {
      this.sources = []
    },
    methods: {
      back () {
        this.$router.back()
      },
      _getSources () {
        let url = 'source-list?book=' + this.$store.state.bookId
        getInfo(url)
        .then((res) => {
          if (res.length) {
            this.sources = res
          }
        })
      },
      computeTime (utc) {
        // UTC时间字符串："2017-06-18T07:33:57.921Z"
        let oldDate = new Date(utc)
        let nowDate = new Date()
        let days = ((nowDate - oldDate) / (1000 * 3600 * 24)) >>> 0
        if (days) {
          return `${days}天前`
        }
        let hours = ((nowDate - oldDate) / (1000 * 3600)) >>> 0
        if (hours) {
          return `${hours}小时前`
        }
        let minutes = ((nowDate - oldDate) / (1000 * 60)) >>> 0
        if (minutes) {
          return `${minutes}分钟前`
        } else {
          return '刚刚'
        }
      }
    },
    components: {
      scroll
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .srclist
    position absolute
    top 0
    bottom 0
    width 100%
    background #eee
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    &.slide-enter, &.slide-leave-to
      transform: translateY(61px)
      opacity 0
    .header
      align-items center
      height 62px
      line-height 62px
      background #b93221
      color white
      font-size 18px
      .icon
        padding 0 24px
      .title
        display inline-block
    .func
      margin-top 24px
      font-size 16px
      background #fff
      .func-item
        height 48px
        line-height 48px
        .icon
          margin 16px
          vertical-align center
        .icon-zssq
          font-size 24px
          color #fdd28b
          border 10px #ffd187
          border-radius 50%
          background #ffa208
        .icon-lingdang
          font-size 16px
          padding 4px
          color #fff
          border-radius 50%
          background #71728e
    .total
      height 12px
      line-height 12px
      margin 16px
      font-size 12px
      color rgba(0,0,0,.4)
    .source-list
      height 100%
      overflow hidden
      font-size 16px
      background #fff
      .source-item
        display flex
        align-items center
        .icon
          margin 16px
          padding 4px
          color #fff
          border-radius 50%
          background #666
        .info
          padding 12px 0
          height 55px
          .title
            line-height 35px
            font-size 16px
            font-weight 250
            color #212121
          .update
            display block
            width 258px
            font-size 12px
            color #727272
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
</style>
