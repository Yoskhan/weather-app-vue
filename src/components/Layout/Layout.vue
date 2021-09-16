<template>
  <div>
    <Header />
    <main class="container-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "../UI/Header.vue";

export default {
  components: { Header },
  data: function() {
    return {};
  },
};
</script>

<style scoped>
.container-main {
  margin-top: 2rem;
}
</style>
