<template>
  <div class="Container">
    <span
      @click="changeLanguage('hr')"
      :class="[this.language === 'hr' ? 'Active' : 'Inactive']"
      >HR</span
    >
    <span class="Active"> / </span>
    <span
      @click="changeLanguage('en')"
      :class="[this.language === 'en' ? 'Active' : 'Inactive']"
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
