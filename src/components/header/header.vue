<template>
  <div class="header">
    <h1 class="title">
      <!-- <i class="logo icon-zhuishushenqi" /><span>书 神 器</span> -->
      <img class="logo" src="./asstes/logo.png">
    </h1>
    <div class="button-wrapper">
      <i class="button icon-search" />
      <i class="button icon-more" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    display flex
    // width 100%
    justify-content space-between
    padding 12px
    line-height 32px
    background #b93221
    color white
    .title
      font-size 18px
      font-weight 700
      .logo
        display inline-block
        height 22px
        vertical-align middle
    .button-wrapper
      line-height 32px
      font-weight 700
      .button
        padding 8px
        font-size 22px
</style>
