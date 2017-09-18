<template>
  <transition name="slide">
    <div class="search">
      <div class="header">
        
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {}
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
        transition: all .2s
    &.slide-enter, &.slide-leave-to
        transform: translate3d(0, 100%, 0)
</style>
