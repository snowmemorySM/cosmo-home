<template>
    <div id="header">
        <b-navbar toggleable="lg" type="dark" variant="dark" style="height: 60px;">
            <router-link class="navbar-brand nav-link" to="/">
                <img v-bind="logProps" alt="Vue logo" src="../assets/logo.png">
            </router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="nav-item nav-link" to="/message">メッセージ</router-link>
                    <router-link class="nav-item nav-link" to="/solution">ソリューション案内</router-link>
                    <router-link class="nav-item nav-link" to="/company">企業情報</router-link>
                    <router-link class="nav-item nav-link" to="/recruit">採用情報</router-link>
                    <router-link class="nav-item nav-link" to="/qna">お問い合わせ</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
          logProps: {width: 30, height: 30, class: 'logo'}
      };
  },
}
</script>

<style scoped>
#header {
    position: fixed;
    width: 100%;
    z-index: 9999;
}
</style>
