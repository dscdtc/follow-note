<template>
  <div class="reader">
    <div class="header"></div>
    <div class="content"></div>
    <div class="footer"></div>
  </div>
</template>

<script>
import {getInfo} from 'api/get'
export default {
  name: 'reader',
  data () {
    return {
      sources: [],
      chapters: [],
      content: []
    }
  },
  created () {
    console.log('created!!!!!!!!')
  },
  activated () {
    this._getChapters()
  },
  methods: {
    _getChapters () {
      console.log(1111111111)
      async () => {
        console.log(22222222222)
        // get sources list => get tocId
        let url = 'source-list?book=' + this.$store.state.bookId
        let res = await getInfo(url)
        if (res.length) { this.sources = res }
        // get chapters
        let tocId = this.$store.state.readRecord.tocId || this.sources[1]._id
        url = 'chapters?id=' + tocId
        res = await getInfo(url)
        if (res.chapters.length) { this.chapters = res.chapters }
        console.log(this.chapters)
      }

      // // get sources list => get tocId
      // let url = 'source-list?book=' + this.$store.state.bookId
      // getInfo(url)
      // .then((res) => {
      //   if (res.length) {
      //     this.sources = res
      //   }
      // })
      // // get chapters
      // .then(() => {
      //   let tocId = this.$store.state.readRecord.tocId || this.sources[1]._id
      //   let url = 'chapters?id=' + tocId
      //   getInfo(url)
      //   .then((res) => {
      //     if (res.chapters.length) {
      //       this.chapters = res.chapters
      //     }
      //     console.log(this.chapters)
      //   })
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
