<template>
  <div class="container-city-badge" @click="changeRoute(cityData.id)">
    <div class="title">{{ cityData.name }}</div>
    <div class="icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>

    <div class="container-temp-and-icons">
      <span
        class="icon-favorite"
        @click.stop="addRemoveCityFromFavorites(cityData)"
      >
        <img
          v-if="isFavorite"
          src="../../assets/star-yellow.svg"
          alt="icon-star"
          width="20px"
        />
        <img
          v-else
          src="../../assets/star-gray.svg"
          alt="icon-star"
          width="20px"
        />
      </span>
      <span>{{ cityData.main.temp }} ºC</span>
      <span class="icon-delete" @click.stop="deleteCity(cityData.id)">
        <img src="../../assets/delete-red.svg" alt="icon-star" width="20px" />
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import i18n from "../../i18n";

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
  methods: {
    changeRoute: function(id) {
      this.$router.push(`/weather/${id}`);
    },
    deleteCity: function(id) {
      this.$store.commit("deleteCityById", id);
    },
    addRemoveCityFromFavorites: function(city) {
      const isFavorite = this.$store.getters.isFavorite(city.id);

      if (isFavorite) {
        this.$store.commit("removeCityFromFavorites", city);
      } else {
        this.$store.commit("addCityToFavorites", city);
      }
    },
  },
  computed: {
    isFavorite: function() {
      return this.$store.getters.isFavorite(this.cityId);
    },
  },
  mounted() {
    const local = i18n.locale;
 
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=2d68358918888f615d0902c866620ffa&lang=${local}&units=metric`
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
}
.title {
  padding: 0.2rem 1rem 0 1rem;
}
.container-temp-and-icons {
  display: flex;
  margin: 0 auto;
  width: 85%;
  align-items: flex-start;
  justify-content: space-between;
}

.container-temp-and-icons img {
  display: none;
}

.container-city-badge:hover img {
  display: inline-block;
}
</style>
