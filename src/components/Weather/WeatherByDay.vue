<template>
  <div>
    <h1 class="city-title">{{ cityName }}</h1>
    <h4 class="week-subtitle">{{ $t("by-day-component.subtitle") }}</h4>

    <div class="paper-for-days">
      <div v-for="day in cityWeekForecast" :key="day.dt">
        <day-badge :day="day"></day-badge>
      </div>
    </div>
  </div>
</template>

<script>
import DayBadge from "./DayBadge.vue";

export default {
  components: { DayBadge },
  data: function() {
    return {
      dataDays: {},
      cityName: "",
    };
  },
  computed: {
    cityWeekForecast() {
      return this.$store.state.cityWeekForecast;
    },
  },
  mounted() {
    const cityID = this.$route.params.city;
    let city = {};

    city = this.$store.getters.getCityById(cityID);
    this.cityName = city.name;

    this.$store.dispatch("getCityWeekForecast", city);
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
@import "../../styles/variables.scss";

.paper-for-days {
  @include paper();
  width: 70%;
}

.city-title {
  margin: 0;
}

.week-subtitle {
  color: $gray-color-dark;
  margin: 0;
}
</style>
