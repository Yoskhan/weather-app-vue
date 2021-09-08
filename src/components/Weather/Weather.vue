<template>
  <div>
    <div>Weather</div>
    <search-bar-city></search-bar-city>
    <div class="paper-cities">
      <div v-for="city in cities" :key="city">
          <city-icon :v-if="city" :city="city" :temperature="10"></city-icon>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBarCity from "./SearchBarCity.vue";
import CityIcon from "./CityIcon.vue";

export default {
  components: { SearchBarCity, CityIcon },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
};
</script>

<style scoped>
.paper-cities {
  text-align: center;
  border: 1px solid black;
  padding: 4rem;
  margin: 0 auto;
  margin-top: 2rem;
  width: 60%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
