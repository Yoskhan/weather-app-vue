<template>
  <div id="app">
    <div id="nav">
      <Layout>
        <router-view :key="updateComponents"></router-view>
      </Layout>
    </div>
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";

export default {
  components: { Layout: Layout },
  data: function() {
    return {};
  },
  computed: {
    updateComponents(){
      return this.$store.state.updateComponents;
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

html,
body {
  margin: 0px !important;
  padding: 0px !important;
  box-sizing: border-box;
}
</style>
