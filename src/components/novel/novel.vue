<template>
  <div class="novel">
    <scroll
      class="novel-list"
      :data="novels">
      <ul>
        <li v-for="(novel, index) in novels" :key="index" class="novel-item">
          <div class="img">
            <img width="45" height="55" :src="proxyUrl+novel.cover" />
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

export default {
  props: {
    novels: Array
  },
  data () {
    return {
      proxyUrl: 'http://statics.zhuishushenqi.com'
    }
  },
  methods: {
    computeTime (utc) {
      // UTC时间字符串："2017-06-18T07:33:57.921Z"
      // let timeStr = updated.split('.')[0].replace(/-/g, '/').replace('T', ' ')
      // let oldDate = new Date(timeStr)
      let oldDate = new Date(utc)
      let nowDate = new Date()
      let hours = parseInt(Math.floor((nowDate - oldDate) / (1000 * 3600)))
      if (hours) {
        return `${hours}小时前更新`
      }
      let minutes = parseInt(Math.floor((nowDate - oldDate) / (1000 * 60)))
      if (minutes) {
        return `${minutes}分钟前更新`
      }
      let days = parseInt(Math.floor((nowDate - oldDate) / (1000 * 3600 * 24)))
      if (days) {
        return `${days}天前更新`
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