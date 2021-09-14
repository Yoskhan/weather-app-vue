<template>
  <div class="container-city-badge">
    <div class="title-city">{{ cityData.name }}</div>
    <div class="icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>
    <span>{{ cityData.main.temp }}ºC</span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["cityId"],
  data: function() {
    return {
      cityData: {
        main: {
          temp: 0,
        },
      },
      icon: "",
    };
  },
  mounted() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=2d68358918888f615d0902c866620ffa&lang=hr&units=metric`
      )
      .then((response) => {
        // handle success
        this.cityData = response.data;
        this.icon = `http://openweathermap.org/img/wn/${this.cityData.weather[0].icon}@2x.png`;
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

.container-city-badge {
  @include badge();
  cursor: default;
}

.title-city {
  padding: 0.2rem 1rem 0 1rem;
}
</style>
