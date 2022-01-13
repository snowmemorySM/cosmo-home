<template>
  <div class="contents">
    <div class="info-banner">
        <h3>お問い合わせ</h3>
    </div>
    <div class="searh-box">
        112
    </div>
    <div class="list-box">
        221
    </div>
    <PagingBar v-on:next="nextPage"></PagingBar>
  </div>
</template>

<script>
import PagingBar from '../components/PagingBar.vue'
import test from '../util/postCode.js'


export default {
  name: 'QnA',
  components: { 
    PagingBar 
  },
  data() {
    return {
      isLoding: false,
      list: [],      
    };
  },
  created() {
    console.log('created')
    console.log('post-code test = ' + test.getAddress('1710021'));
    this.loadData(1)
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    // '$route': 'fetchData'
  },
  methods: {
    loadData(page, keyword) {
      this.isLoding = true
      var path = `/v1/api/qna?page=${page}`
      if (keyword) {
        path += `&keyword=${keyword}`
      }
      console.log(`path=${path}`)

      this.$http.get(path)
        .then((response) => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        .finally(() => {
          console.log('finally')
          this.isLoding = false
        })
    },
    nextPage(page, keyword) {
      this.loadData(page, keyword)
    }
  }
}
</script>
