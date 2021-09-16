<template>
  <div class="container-day-badge" @click="changeRoute(getDayName(day.dt))">
    <div class="container-day-title">{{ getDayName(day.dt) }}</div>
    <div class="container-icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>
    <div class="container-temp">
      <span class="min-temp">{{ parseInt(day.temp.min) }}ºC </span>
      <span class="max-temp">{{ parseInt(day.temp.max) }}ºC</span>
    </div>
  </div>
</template>

<script>
import i18n from "../../i18n";

export default {
  props: ["day"],
  data: function() {
    return {
      icon: `http://openweathermap.org/img/wn/${this.day.weather[0].icon}@2x.png`,
    };
  },
  methods: {
    changeRoute: function(day) {
      this.$router.push(`${this.$route.path}/${day}`);
    },
    getDayName: function(timestamp) {
      const locale = i18n.locale;

      return new Date(timestamp * 1000).toLocaleDateString(locale, {
        weekday: "short",
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
@import "../../styles/variables.scss";

.container-day-badge {
  @include badge();
  width: 7rem;
}
.container-day-title {
  padding: 0.2rem 1rem 0 1rem;
  text-transform: capitalize;
}
.max-temp {
  color: $gray-color-dark;
}
.container-temp {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto;
}
</style>
