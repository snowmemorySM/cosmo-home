<template>
  <div class="main-container">
    <div id="main-banner">
      main-banner
      <div class="quick-links">
        <div class="row">
          <div class="col-sm">
            <router-link to="/company" class="main-link-info">
              <div class="title">企業紹介</div>
              <div class="more">MORE</div>
            </router-link>
          </div>
          <div class="col-sm">
            <router-link to="/solution" class="main-link-info">
              <div class="title">ソリューション</div>
              <div class="more">MORE</div>
            </router-link>
          </div>
          <div class="col-sm">
            <router-link to="/recruit" class="main-link-info">
              <div class="title">採用情報</div>
              <div class="more">MORE</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="main-info">
        <div class="notice-box">
          <div class="notice-title-box">
            <span class="left-title">
              <h3>お知らせ</h3>
            </span>
            <span class="right-btn">
              <router-link to="/notice">
                <b-icon icon="list-ol" aria-hidden="true"></b-icon> 一覧はこちら
              </router-link>
            </span>
          </div>
          <div class="notice-list">
            <div v-for="(item, index) in list" :key="index" class="row-box">
              <div class="notice-date">{{item.date}}</div>
              <div class="notice-title">
                <router-link :to="{path: `/notice/${item.id}`}" class="main-link-info">
                  {{item.title}}
                </router-link>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      list: [
        {
          id: 5,
          date: '2022-02-18',
          title: 'test title 5'
        },
        {
          id: 4,
          date: '2022-02-01',
          title: 'test title 4'
        },
        {
          id: 3,
          date: '2022-01-20',
          title: 'test title 3'
        },
        {
          id: 2,
          date: '2021-12-10',
          title: 'test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2 test title 2'
        },
        {
          id: 1,
          date: '2021-11-29',
          title: 'test title 1'
        },
      ],
    };
  },
}
</script>

<style scoped>
#main-banner {
  position: relative;
  background-color: aqua;
  min-height: 400px;
}
#main-info {
  position: relative;
  background-color: deepskyblue;
  min-height: 100px;
}

.quick-links {
  position: absolute;
  width: 70%;
  margin: 0 auto;
  bottom: 10px;
  left: 15%;
}

.quick-links .row a {
  background-size: cover;
  text-decoration-line: none;
  background: darkgrey;
  display: block;
  padding-bottom: 1px;
  border-radius: 15px;
}

.quick-links .main-link-info .title {
    padding: 50px 0 30px;
    font-size: 25px;
    color: #FFF;
    font-weight: bold;
}

.quick-links .main-link-info .more {
    width: 60%;
    margin: 0 auto;
    padding: 5px 20px;
    background-color: #fff;
    color: #000;
    font-weight: bold;
    border-radius: 17px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.notice-box {
  width: 70%;
  margin: 0 auto;
  min-height: 200px;
  padding: 5px;
  background-color: aquamarine;
}

#main-info .notice-box .notice-title-box,
#main-info .notice-box .notice-list {
  position: relative;
  width: 90%;
  margin: 0 auto;
}

#main-info .notice-box .notice-title-box {  
  padding: 5px 0 34px 0;
  border-bottom: 1px solid #CDCDCD;
}

#main-info .notice-box .notice-title-box .left-title {
  position: absolute;
  left: 0;
}

#main-info .notice-box .notice-title-box .right-btn {
  position: absolute;
  padding-top: 10px;
  right: 0;
}

#main-info .notice-box a {
  color: #000;
  text-decoration: none;
}

#main-info .notice-box .notice-list {
  margin-top: 5px;
  min-height: 50px;
  text-align: left;
}

#main-info .notice-box .notice-list .row-box {
  position: relative;
  width: 100%;
  padding-bottom: 5px;
}

.notice-date, .notice-title {
  padding: 0 10px;
}

.notice-date {
  font-size: 10px;
}

.notice-title {
  font-size: 15px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

@media (max-width: 600px) {

}

</style>