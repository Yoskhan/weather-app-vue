<template>
  <div id="app">
    <div id="nav">
      <Layout>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </Layout>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Layout from './components/Layout/Layout.vue'

export default {
    components: {'Layout' : Layout},
    data: function () {
        return {
            
        }
    }
};

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  margin: 0px !important;
  padding: 0px !important;
  box-sizing:border-box;
}

</style>
