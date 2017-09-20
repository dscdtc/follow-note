<template>
  <transition name="slide">
    <div class="search">
      <div class="header">
        <i @click="back" class="icon icon-back" />
        <input v-model="searchName" class="input" placeholder="输入书名或作者名" autofocus required />
        <i @click="clear" class="icon-clear" />
        <i class="icon icon-search" />
      </div>
      <div class="divider">
        <span>大家都在搜</span>
        <i @click="change" class="icon icon-refresh"> 换一批</i>
      </div>
      <div class="prompt">
        <span v-for="(item, index) in promotions" :key="index" :style="{backgroundColor:colorful[index]}" @click="autoinput(item)" class="pro-item">{{item}}</span>
      </div>
      <div class="divider">
        <span>搜索历史</span>
        <i @click="empty" class="icon icon-empty" :style="isDisable"> 清空</i>
      </div>
      <div class="history">
        <ul>
          <li v-for="(item, index) in histories" :key="index" @click="autoinput(item)" class="his-item">
            <i class="icon-timer" />
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <transition name="fade">
        <div v-if="searchName" class="result">
          <img width="108" src="./assets/ku.png"/>
          <p class="msg">未搜索到结果</p>
          <button @click="clear" class="btn">全网精确找书</button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import {shuffle} from 'common/js/util.js'
export default {
  name: 'search',
  data () {
    return {
      promotions: ['爱多尼斯', '气汤纪检物理课', '成爷我爱你', '阴阳先生', '雪人', '绝世邪神', '我怎么这么可爱', '何所冬暖，何所夏凉', '斗天武神', '逼婚36计，腹黑神医'],
      histories: ['呵呵呵呵呵呵呵', '哈哈哈哈哈哈', '嘻嘻嘻嘻嘻嘻嘻嘻嘻', '嘿嘿嘿嘿嘿嘿嘿'],
      colorful: ['firebrick', 'hotpink', 'darkmagenta', 'saddlebrown', 'orangered', 'darkgoldenrod', 'darkslategray', 'olive', 'darkcyan', 'darkslateblue'],
      searchName: ''
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
    },
    clear () {
      this.searchName = ''
    },
    autoinput (name) {
      this.searchName = name
    }
  },
  computed: {
    isDisable () {
      if (this.histories.length === 0) { // 判断空数组不能用：arr === []; if(arr); 可以用arr==false; arr.length === 0
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
    opacity 1
    &.slide-enter-active, &.slide-leave-active
      transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
    &.slide-enter, &.slide-leave-to
      transform: translateY(61px)
    .header
      display flex
      justify-content space-between
      align-items center
      height 62px
      background #b93221
      color white
      font-size 16px
      .icon
        padding 20px
        font-weight 600
        font-size 20px
        border 1px solid rgba(0, 0, 0, .1)
      .input
        flex-grow 1
        padding-left 20px
        height 100%
        // border-left 1px solid rgba(0, 0, 0, .1)
        background-color transparent
        color #fff
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
      .icon-clear
        display: none
        padding 10px
        font-size 18px
        color rgba(255, 255, 255, .4)
        // border-right 1px solid rgba(0, 0, 0, .1)
      .input::-ms-clear // 清除ie自带删除按钮
        display: none
      .input:valid + .icon-clear // 选择required验证通过后的clear元素。
        display: inline

    .divider
      display flex
      justify-content space-between
      padding 16px
      color #141414
      font-weight bold
      font-size 12px
      .icon
        font-size 12px
        color rgba(0, 0, 0, .8)

    .prompt
      max-height 114px
      margin 8px
      overflow hidden
      .pro-item
        display inline-block
        margin 8px
        padding 6px 10px
        font-size 12px
        color #fff
        border-radius 2px
        background-color pink

    .history
      font-size 16px
      color rgba(0, 0, 0, .6)
      .his-item
        line-height 40px
        .icon-timer
          padding 16px

    .result
      display flex
      flex-direction column
      justify-content center
      align-items center
      position absolute
      top 62px
      bottom 0
      width 100%
      background #fff
      opacity 1
      &.fade-enter-active, &.fade-leave-active
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0)
      &.fade-enter, &.fade-leave-to
        transform scaleY(60px)
        opacity 0
      .msg
        padding 30px
        font-size 14px
        color grey
      .btn
        padding 12px
        /* button宽度自适应 */
        width auto
        overflow visible
        font-size 16px
        color #fff
        background #b93221
        border-radius 2px

      

</style>
