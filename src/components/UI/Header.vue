<template>
  <header class="Header">
    <div to="/" class="Header-Title">
      <h1>
        <router-link to="/weather" class="logo-link">Weather App</router-link>
      </h1>
    </div>
    <nav>
      <ul class="container-list">
        <li @click="logOut">{{ $t("header.log-out") }}</li>
        <router-link to="/weather/favorites" class="nav-list-item">{{
          $t("header.favorite")
        }}</router-link>
        <language-switch class="language-switch"></language-switch>
      </ul>
    </nav>
  </header>
</template>

<script>
import LanguageSwitch from "./LanguageSwitch.vue";

export default {
  components: { LanguageSwitch: LanguageSwitch },
  methods: {
    logOut: function() {
      window.localStorage.removeItem("xToken");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/variables.scss";

.Header {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $secondary-color;
}

.logo-link {
  color: $primary-color;
  text-decoration: none;
  margin-left: 3rem;
}

.container-list {
  display: flex;

  li {
    margin: 0 1.5rem;
    color: $gray-color-light;
    list-style: none;
  }

  li:hover {
    color: $primary-color;
    cursor: pointer;
  }
}

.nav-list-item {
  text-decoration: none;
  color: $gray-color-light;

  &:hover {
  color: $primary-color;

  }
}

.language-switch {
  margin: 0 3rem;
}
</style>
