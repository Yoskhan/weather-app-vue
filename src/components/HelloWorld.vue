<template>
  <div class="hello">
    <p>{{ $t("message") }}</p>
    <button v-on:click="changeLanguage">Change Language</button>
  </div>
</template>

<script>
import i18n from '../i18n'

export default {
  props: {
    msg: String,
  },
  methods: {
    changeLanguage: function() {
      console.log("blabla");
      i18n.locale = 'en';
    },
  },
};
</script>

<style scoped></style>
