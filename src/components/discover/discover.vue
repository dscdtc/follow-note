<template>
  <div class="discover">
    <ul>
      <li class="disc-item">
        <div class="icon">
          <img width="25" height="25" src="./assets/category.png" />
        </div>
        <h2 class="name">排行榜</h2>
      </li>
      <li class="disc-item">
        <div class="icon">
          <img width="25" height="25" src="./assets/zhuti.png" />
        </div>
        <h2 class="name">主题书单</h2>
      </li>
      <li class="disc-item">
        <div class="icon">
          <img width="25" height="25" src="./assets/fenlei.png" />
        </div>
        <h2 class="name">分类</h2>
      </li>
      <li class="disc-item">
        <div class="icon">
          <img width="25" height="25" src="./assets/audio.png" />
        </div>
        <h2 class="name">有声小说</h2>
      </li>
      <li class="disc-item">
        <div class="icon">
          <img width="25" height="25" src="./assets/random.png" />
        </div>
        <h2 class="name">随机看书</h2>
      </li>
      <li class="disc-item">
        <div class="icon">
          <img width="27" height="25" src="./assets/game.png" />
        </div>
        <h2 class="name">漫画中心</h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'discover'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .discover
    height 100%
    background #e5e5e5
    .disc-item
      display flex
      height 60px
      .icon
        align-items center
        vertical-align middle
        padding 17px
      .name
        line-height 60px
        width 100%
        font-size 16px
        color #212121
        width 100%
        border-1px(rgba(7,17,27,.1))
</style>
