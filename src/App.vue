<template>
  <div id="app">
    <Header/>
    <div id="main-container">
      <LinkPathBar/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import LinkPathBar from './components/LinkPathBar.vue'

export default {
  name: 'App',
  components: {

    // eslint-disable-next-line vue/no-unused-components
    Header,
    // eslint-disable-next-line vue/no-unused-components
    Footer, 
    // eslint-disable-next-line vue/no-unused-components
    LinkPathBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-container {
  position: relative;
  top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
