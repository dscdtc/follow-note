<template>
  <div class="novel">
    <scroll
      class="novel-list"
      :probeType="3"
      :data="novels"
      :listenScroll="true"
      :pulldown="true"
      @pulldown="_refresh"
      @scroll="scroll">
      <ul>
        <li class="loading">
          <i v-show="!refresh" v-if="scrollY > 0 && scrollY < 50" class="icon-arrow-down" />
          <i v-show="!refresh" v-if="scrollY >= 50" class="icon-arrow-up" />
          <i v-show="refresh" v-if="!isLoaded" class="icon-loading" />
          <i v-show="refresh" v-if="isLoaded" class="icon-ok" />
        </li>
        <li v-for="(novel, index) in novels" :key="index" class="novel-item">
          <div class="img">
            <img width="45" height="55" v-lazy="proxyUrl+novel.cover" />
          </div>
          <div class="info">
            <h2 class="title">{{novel.title}}</h2>
            <span class="update">{{computeTime(novel.updated)}}：{{novel.lastChapter}}</span>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from 'comp/scroll/scroll'
import {getInfo} from 'api/get'

const ERR_OK = 0

export default {
  data () {
    return {
      novels: [],
      proxyUrl: 'http://statics.zhuishushenqi.com',
      scrollY: 0,
      refresh: false,
      isLoaded: false
    }
  },
  created () {
    this._getNovels()
  },
  methods: {
    _getNovels () {
      getInfo('novels')
      .then((res) => {
        // console.log(res.data)
        if (res.errno === ERR_OK) {
          this.novels = res.data || []
        }
      })
    },
    computeTime (utc) {
      // UTC时间字符串："2017-06-18T07:33:57.921Z"
      // let timeStr = updated.split('.')[0].replace(/-/g, '/').replace('T', ' ')
      // let oldDate = new Date(timeStr)
      let oldDate = new Date(utc)
      let nowDate = new Date()
      let days = parseInt(Math.floor((nowDate - oldDate) / (1000 * 3600 * 24)))
      if (days) {
        return `${days}天前更新`
      }
      let hours = parseInt(Math.floor((nowDate - oldDate) / (1000 * 3600)))
      if (hours) {
        return `${hours}小时前更新`
      }
      let minutes = parseInt(Math.floor((nowDate - oldDate) / (1000 * 60)))
      if (minutes) {
        return `${minutes}分钟前更新`
      }
    },
    scroll (pos) {
      this.scrollY = Math.round(pos.y)
      if (!this.isLoaded && this.scrollY > 50) {
        this._refresh()
      }
    },
    _refresh () {
      console.info('refreshing...')
      this.refresh = true
      if (!this.isLoaded) {
        this.refresh = false
        return
      }
      getInfo('novels')
      .then((res) => {
        console.log(res.data)
        if (res.errno === ERR_OK) {
          this.novels = res.data || []
          this.isLoaded = true
        }
      })
      this.isLoaded = false
    }
  },
  components: {
    scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .novel
    position absolute
    top 87px
    bottom 0
    margin 10px
    width 100%
    font-size 0
    .novel-list
      height 100%
      overflow hidden
      .loading
        width 100%
        text-align center
        font-weight bold
        color #b93221
      .novel-item
        display flex
        .img
          padding 10px
          border-radius 5px
        .info
          padding 10px 0
          height 55px
          width 100%
          border-1px(rgba(7,17,27,.1))
          .title
            line-height 35px
            font-size 16px
            font-weight bold
            color #212121
          .update
            font-size 12px
            color #727272
</style>