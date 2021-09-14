<template>
  <div>
    <search-bar-city></search-bar-city>
    <div class="paper-for-cities">
      <div v-for="cityForecast in citiesForecast" :key="cityForecast.id">
        <city-badge :v-if="cityForecast" :city="cityForecast"> </city-badge>
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
    myCities() {
      return this.$store.state.myCities;
    },
    citiesForecast() {
      return this.$store.state.citiesForecast;
    },
  },
  mounted() {
    this.$store.dispatch("getCitiesForecast");
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
