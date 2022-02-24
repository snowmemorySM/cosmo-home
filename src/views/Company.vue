<template>
    <div class="company">
      <div v-if="disabled">
        <div class="banner-box">
          <div id="title-bg" class="title-box">
            <div class="title">
              会社情報
            </div>
          </div>
        </div>
        <div class="meun-box">
          <router-link class="menu-item" to="/company/info">会社概要</router-link>
          <router-link class="menu-item" to="/company/contact">会社位置</router-link>
          <router-link class="menu-item" to="/company/soshikizu">組織図</router-link>
        </div>
      </div>
      <div v-else class="container">
        <router-view></router-view>
      </div>
    </div>
</template>

<script>

const range = '/company';

export default {
  name: 'Company',
  computed: {
      disabled() {
        return this.$route.path == range; 
      }
  },
  data() {
    return {
    };
  },
}
</script>

<style scoped>
.container {
  position: relative;
  min-height: 500px;
}

.banner-box {
  display: block;
  min-height: 200px;
  border-bottom: 1px solid #000;
}

.title-box {
  max-width: 1200px;
  width: 90%;
  height: 200px;
  margin: 0 auto;
  background-color: aqua;
}

.title-box .title {
  position: relative;
  color: #fff;
  font-size: 30px;
  text-align: left;
  width: 300px;
  height: 100px;
  display: table-cell;
  vertical-align: middle;
  padding-left: 30px;
  background-color: rebeccapurple;
  top: 50px;
}

.meun-box {
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;
  padding-top: 25px;
  justify-content: space-between;
}

.meun-box .menu-item {
    flex-basis: 31.5%;
    max-width: 31.5%;
    padding: 4em;
    margin-bottom: 2em;
    border: 1px solid #CDCDCD;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
}

.info-box {
  position: relative;
  width: 70%;
  margin: 0 auto;
  padding-top: 20px;
  min-height: 500px;
}

@media (max-width: 689px) {
  .meun-box {    
    display: block;
    min-height: 200px;
    position: relative;
  }

  .meun-box .menu-item {
    display: block;
    position: relative;
    flex-basis: 0;
    max-width: 80%;
    padding: 28px;
    left: 10%;
    margin-bottom: 10px;
  }
}

</style>