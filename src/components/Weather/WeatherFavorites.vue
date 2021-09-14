<template>
  <div>
    <h1 class="city">{{ $t("favorites-component.subtitle") }}</h1>
    <div class="paper-for-cities-favorites">
      <div v-for="city in favoriteCities" :key="city.id">
        <city-badge-favorite
          :v-if="city"
          :cityId="city.id"
        ></city-badge-favorite>
      </div>
    </div>
  </div>
</template>

<script>
import CityBadgeFavorite from "./CityBadgeFavorite.vue";

export default {
  components: { CityBadgeFavorite },
  computed: {
    favoriteCities() {
      return this.$store.state.favorites;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
@import "../../styles/variables.scss";

.paper-for-cities-favorites {
  @include paper();
}
</style>
