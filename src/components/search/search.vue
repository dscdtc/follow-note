<template>
  <transition name="slide">
    <div class="search">
      <div class="header">
        <i @click="back" class="icon icon-back" />
        <input class="input" placeholder="输入书名或作者名" autofocus required/>
        <i class="icon icon-search" />
      </div>
      <div class="divider">
        <span>大家都在搜</span>
        <i @click="change" class="icon icon-refresh"> 换一批</i>
      </div>
      <div class="prompt">
        <span v-for="(item, index) in promotions" :key="index" :style="{backgroundColor:colorful[index]}" class="pro-item">{{item}}</span>
      </div>
      <div class="divider">
        <span>搜索历史</span>
        <i @click="empty" class="icon icon-empty" :style="isDisable"> 清空</i>
      </div>
      <div class="history">
        <ul>
          <li v-for="(item, index) in histories" :key="index" class="his-item">
            <i class="icon-timer" />
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import {shuffle} from 'common/js/util.js'
export default {
  name: 'search',
  data () {
    return {
      promotions: ['爱多尼斯', '气汤纪检物理课', '阴阳先生', '雪人', '绝世邪神', '我怎么这么可爱', '何所冬暖，何所夏凉', '斗天武神', '逼婚36计，腹黑神医'],
      histories: ['呵呵呵呵呵呵呵', '哈哈哈哈哈哈', '嘻嘻嘻嘻嘻嘻嘻嘻嘻', '嘿嘿嘿嘿嘿嘿嘿'],
      colorful: ['firebrick', 'hotpink', 'darkmagenta', 'saddlebrown', 'orangered', 'darkgoldenrod', 'darkslategray', 'olive', 'darkcyan', 'darkslateblue']
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    change () {
      this.promotions = shuffle(this.promotions)
      this.colorful = shuffle(this.colorful)
    },
    empty () {
      this.histories = []
    }
  },
  computed: {
    isDisable () {
      if (this.promotions) {
        return {color: 'rgba(0, 0, 0, .8)'}
      } else {
        return {color: 'grey'}
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .search
    position absolute
    top 0
    bottom 0
    width 100%
    background #fff
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s
    &.slide-enter, &.slide-leave-to
      transform: scaleY(50%)
      opacity 0
    .header
      display flex
      justify-content space-between
      align-items center
      height 62px
      background #b93221
      color white
      font-size 16px
      .icon
        padding 18px
        font-weight 600
        font-size 20px
      .input
        flex-grow 1
        border 10px #fff
        background-color transparent
        &::-webkit-input-placeholder /* WebKit browsers */
          font-size 15px
          color rgba(255, 255, 255, .4)
        &:-moz-placeholder /* Mozilla Firefox 4 to 18 */
          font-size 15px
          color rgba(255, 255, 255, .4)
        &::-moz-placeholder /* Mozilla Firefox 19+ */
          font-size 15px
          color rgba(255, 255, 255, .4)
        &:-ms-input-placeholder /* Internet Explorer 10+ */
          font-size 15px
          color rgba(255, 255, 255, .4)

    .divider
      display flex
      justify-content space-between
      padding 16px
      color #141414
      font-weight bold
      font-size 12px
      .icon
        font-size 12px
        // color rgba(0, 0, 0, .8)

    .prompt
      max-height 114px
      margin 8px
      overflow hidden
      .pro-item
        display inline-block
        margin 8px
        padding 4px 8px
        color #fff
        background-color pink

    .history
      font-size 16px
      color rgba(0, 0, 0, .6)
      .his-item
        line-height 40px
        .icon-timer
          padding 16px
</style>
