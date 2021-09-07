<template>
  <div class="hello">
    <p>{{ $t("message") }}</p>
    <button v-on:click="increment">Change Language</button>
  </div>
</template>

<script>
import i18n from "../i18n";

export default {
  props: {
    msg: String,
  },
  methods: {
    changeLanguage: function() {
      console.log("blabla");
      i18n.locale = "en";
    },
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<style scoped></style>
