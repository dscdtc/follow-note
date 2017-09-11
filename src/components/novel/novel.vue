<template>
  <div class="novel">
    <ul>
      <li v-for="(novel, index) in novels" :key="index" class="novel-item">
        <div class="img">
          <img width="40" height="60" :src="novel.image" />
        </div>
        <div class="info">
          <h2 class="title">{{novel.name}}</h2>
          <span class="update">{{novel.update[0]}}:{{novel.update[1]}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    novels: Array
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../../common/stylus/mixin'
  .novel
    margin 10px
    // width 100%
    font-size 0
    .novel-item
      display flex
      .img
        padding 10px
        text-align center
        border-radius 2px
      .info
        padding 8px 0
        border-1px(rgba(7,17,27,.1))
        .title
          padding 8px 0
          font-size 16px
          font-weight 700
          color #212121
        .update
          font-size 12px
          color #727272
</style>