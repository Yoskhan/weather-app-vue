<template>
  <header class="Header">
    <div to="/" class="Header-Title">
      <h1>Weather App</h1>
    </div>
    <language-switch class="Language-Switch"></language-switch>
  </header>
</template>

<script>
import LanguageSwitch from "./LanguageSwitch.vue";

export default {
  components: { LanguageSwitch: LanguageSwitch },
};
</script>

<style>
.Header {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
}

.Header-Title {
  color: white;
  text-decoration: none;
  display: inline-block;
  margin-left: 3rem;
}

.Language-Switch {
  margin-right: 3rem;
}
</style>
