<template>
  <div>
    <div class="container-date-city">
      <h1 class="city">{{ byDayForecastData.cityName }}</h1>
      <h4 class="date">{{ byDayForecastData.dateSelected }}</h4>
    </div>

    <div class="paper-for-hours">
      <div
        class="container-table-row"
        v-for="byHourData in byDayForecastData.hoursData"
        :key="byHourData.dt"
      >
        <div class="container-time">
          {{
            new Date(byHourData.dt * 1000).toLocaleString(
              byDayForecastData.locale,
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )
          }}
        </div>
        <div>
          <img
            :src="getIcon(byHourData.weather[0].icon)"
            alt="weather-icon"
            width="65"
            height="65"
          />
        </div>
        <div>{{ byHourData.main.temp }}ºC</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    getIcon: function(iconId) {
      return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    },
  },
  computed: {
    byDayForecastData() {
      return this.$store.state.byDayForecastData;
    },
  },
  mounted() {
    const cityID = this.$route.params.city;
    const daySelected = this.$route.params.day;

    let data = {};

    data.id = cityID;
    data.daySelected = daySelected;

    this.$store.dispatch("getByHourForecast", data);
  },
};
</script>

<style scoped lang="scss">
@import "../../styles/mixins.scss";
@import "../../styles/variables.scss";

.paper-for-hours {
  @include paper();
  flex-direction: column;
}

.city {
  margin: 0;
}

.date {
  color: $gray-color-dark;
  margin: 0;

  &:first-letter {
    text-transform: capitalize;
  }
}

.container-table-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18rem;
  margin: 0.5rem auto;
  padding: 0.5rem 2rem;
  border: 1px solid $gray-color-light;
  border-radius: 1rem;
}
</style>
