<template>
  <div class="container-city-icon" @click="changeRoute(city)">
    <div class="container-city-name">{{ cityData.name }}</div>
    <div class="container-icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>
    <div class="container-temp">
      <span>{{ cityData.main.temp }}ºC</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["city", "temperature"],
  data: function() {
    return {
      cityData: {
        main: {
          temp: 0,
        },
      },
      icon: "",
      item: "blabla",
    };
  },
  methods: {
    changeRoute: function(city) {
      console.log(city);
      this.$router.push(`/weather/${city}`);
    },
    // getDay: function(number) {
    //   var days = [
    //     "Sun",
    //     "Mon",
    //     "Tue",
    //     "Wed",
    //     "Thu",
    //     "Fri",
    //     "Sat",
    //   ];

    //   return days[number];
    // },
  },
  mounted() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=021c002f412b566217abd9326b31aba3&lang=hr&units=metric`
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

<style scoped>
.container-city-icon {
  margin: 1rem 2rem;
  cursor: pointer;
  border: 1px solid whitesmoke;
  border-radius: 1rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 8rem;
}
.container-city-name {
  padding: 0.2rem 1rem 0 1rem;
}
</style>
