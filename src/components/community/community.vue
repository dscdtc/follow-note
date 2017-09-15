<template>
  <div class="community">
    <scroll class="comm-list">
      <ul>
        <li class="comm-item">
          <div class="icon">
            <img width="25" height="25" src="./assets/dongtai.png" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">动态</h2>
          </div>
        </li>
        <div class="divider">公共社区</div>
        <li class="comm-item">
          <div class="icon">
            <img width="25" height="36" src="./assets/discuss.png" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">综合讨论区</h2>
          </div>
        </li>
        <li class="comm-item">
          <div class="icon">
            <img width="25" height="25" src="./assets/comment.png" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">书评区</h2>
          </div>
        </li>
        <li class="comm-item">
          <div class="icon">
            <img width="25" height="36" src="./assets/book_help.png" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">书荒互助区</h2>
          </div>
        </li>
        <li class="comm-item">
          <div class="icon">
            <img width="25" height="25" src="./assets/female.png" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">女生区</h2>
          </div>
        </li>
        <div class="divider">我的社区</div>
        <li v-show="bookshelf" v-for="(novel, index) in bookshelf" :key="index" class="comm-item">
          <div class="icon">
            <img width="30" height="35" v-lazy="proxyUrl+novel.cover" />
          </div>
          <div class="info-wrapper">
            <h2 class="name">{{novel.title}}</h2>
            <span class="num">{{Math.floor(Math.random()*100)}}</span>
          </div>
        </li>
        <li v-show="!bookshelf" class="comm-item">
          <div class="info-wrapper">
            <h2 class="name" style="color:#b2b2b2; text-align:center;">毛都没有社毛社</h2>
          </div>
        </li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import scroll from 'comp/scroll/scroll'
import {getInfo} from 'api/get'

export default {
  data () {
    return {
      bookshelf: [],
      proxyUrl: 'http://statics.zhuishushenqi.com'
    }
  },
  created () {
    this._getBookshelf()
  },
  methods: {
    _getBookshelf () {
      getInfo('bookshelf')
      .then((res) => {
        if (res.ok === true) {
          this.bookshelf = res.data || []
        }
      })
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
  .community
    position absolute
    top 96px
    bottom 0
    width 100%
    font-size 0
    .comm-list
      height 100%
      min-height 101%
      width 100%
      overflow hidden
      .divider
        padding-left 18px
        padding-top 16px
        font-size 12px
        color #b2b2b2
      .comm-item
        display flex
        height 60px
        .icon
          display inline-flex
          align-items center
          padding 21px
        .info-wrapper
          display flex
          justify-content space-between
          width 100%
          border-1px(rgba(7,17,27,.1))
          .name
            line-height 60px
            width 100%
            font-size 16px
            color #212121
          .num
            margin auto 32px
            padding 2px 8px
            font-size 12px
            background #c8c8c8
            color #fff
            border-radius 8px


</style>