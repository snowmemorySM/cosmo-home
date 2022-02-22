<template>
  <div class="container notice-info">
      <div class="row regist-date">
        登録日：2022-02-22
      </div>
      <div class="row notice-detail-title">
        titletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletitletletitletitletitletitletitletitletitletitle
      </div>
      <div class="row body">
          kdalkjdsklajsd<br/>
          adkljalsdjklajsd<br/>
          adkljalkdjlasd<br/>
          kdalkjdsklajsd<br/>
          adkljalsdjklajsd<br/>
          adkljalkdjlasd<br/>
          kdalkjdsklajsd<br/>
          adkljalsdjklajsd<br/>
          adkljalkdjlasd<br/>
          kdalkjdsklajsd<br/>
          adkljalsdjklajsd<br/>
          
          lkjadlkjlas
        </div>
        <div class="back-box">
          <b-button @click="$router.go(-1)">戻る</b-button>
        </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      if (this.$route.params.id) {
        console.log('Notice detail id');
        console.log(this.$route.params.id);
      }
    },
  }
}
</script>

<style>
.notice-info {
  position: relative;
  width: 70%;
  min-height: 500px;
  margin: 0 auto;
  text-align: left;
  padding-top: 30px;
}

.notice-detail-title {
  font-size: 25px;
  font-weight: bold;
  padding: 0.5rem;
  word-break: break-all;
  border-bottom: 3px solid transparent;
  border-image: linear-gradient(to right, #032262 0%, #D4D4D4 100%);
  border-image-slice: 1;
}

.body {
  padding: 10px;
}

.regist-date {
  text-align: right;
  display: block;
}

.back-box {
  text-align: center;
}

</style>