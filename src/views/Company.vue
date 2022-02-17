<template>
    <div class="company">
      <div class="banner-box">
        <div id="title-bg" class="title-box">
          <div class="title">
            会社情報
          </div>
        </div>
      </div>
      <div class="meun-box">
        <router-link class="menu-item" to="/company/info">会社概要</router-link>
        <router-link class="menu-item" to="/company/message">体表おいさつ</router-link>
        <router-link class="menu-item" to="/company/contact">会社位置</router-link>
        <router-link class="menu-item" to="/company/performance">実籍</router-link>
        <router-link class="menu-item" to="/company/soshikizu">組織図</router-link>
        <router-link class="menu-item" to="/privercy/privacy_policy">個人情報保護方針</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Company'
}
</script>

<style scoped>

.company {
  background-color: slategrey;
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
  padding-top: 25px;;
  justify-content: space-between;
}

.meun-box .menu-item {
    flex-basis: 31.5%;
    max-width: 31.5%;
    padding: 4em;
    margin-bottom: 2em;
    background-color: aquamarine;
}

</style>