<template>
  <div>
    <search-bar-city></search-bar-city>
    <div class="paper-for-cities">
      <div v-for="city in cities" :key="city.id">
          <city-badge :v-if="city" :cityId="city.id"> </city-badge>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarCity from "./SearchBarCity.vue";
import CityBadge from "./CityBadge.vue";

export default {
  components: { SearchBarCity, CityBadge },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
@import "../../styles/variables.scss";

.paper-for-cities {
  @include paper();
}
</style>
