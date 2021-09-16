<template>
  <div class="Container">
    <span
      @click="language === 'en' ? changeLanguage('hr') : null"
      :class="[language === 'hr' ? 'Active' : 'Inactive']"
      >HR</span
    >
    <span class="Active"> / </span>
    <span
      @click="language === 'hr' ? changeLanguage('en') : null"
      :class="[language === 'en' ? 'Active' : 'Inactive']"
      >ENG</span
    >
  </div>
</template>

<script>
import i18n from "../../i18n";

export default {
  data: function() {
    return {
      language: "en",
    };
  },
  methods: {
    changeLanguage: function(lang) {
      i18n.locale = lang;
      this.language = lang;
      this.$store.commit("updateComponents");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";

.Inactive {
  color: $gray-color-light;
  cursor: pointer;
}
.Active {
  color: $primary-color-dark;
  cursor: default;
}
</style>
