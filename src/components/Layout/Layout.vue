<template>
  <div>
    <Header />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
import Header from "../UI/Header.vue";

export default {
  components: { 'Header': Header },
  data: function() {
    return {};
  },
};
</script>

<style></style>
