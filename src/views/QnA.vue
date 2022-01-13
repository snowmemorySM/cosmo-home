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

export default {
  name: 'QnA',
  components: { 
    PagingBar 
  },
  data() {
    return {
      list: [],      
    };
  },
  created() {
    console.log('created')
    this.loadData()
  },
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    // '$route': 'fetchData'
  },
  methods: {
    loadData() {
      console.log('loadData')
    },
    nextPage(page) {
      console.log('nextPage :' + page)
    }
  }
  
}
</script>
