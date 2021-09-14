<template>
  <div>
    <h1 class="city-title">{{ cityName }}</h1>
    <h4 class="week-subtitle">{{ $t("by-day-component.subtitle") }}</h4>

    <div class="paper-for-days">
      <div v-for="day in dataDays" :key="day.dt">
        <day-badge :day="day" :cityName="cityName"></day-badge>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DayBadge from "./DayBadge.vue";

export default {
  props: ["city"],
  components: { DayBadge },
  data: function() {
    return {
      dataDays: {},
      cityName: "",
    };
  },

  mounted() {
    const cityID = this.$route.params.city;
    let city = {};

    city = this.$store.getters.getCityById(cityID);
    this.cityName = city.name;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=2d68358918888f615d0902c866620ffa&exclude=minutely,hourly,current&units=metric`
      )
      .then((response) => {
        // handle success
        this.dataDays = response.data.daily.slice(0, 5);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
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
