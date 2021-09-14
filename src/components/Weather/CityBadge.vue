<template>
  <div class="container-city-badge" @click="changeRoute(city.id)">
    <div class="title">{{ city.name }}</div>
    <div class="icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>
    <div class="container-temp-and-icons">
      <span
        class="icon-favorite"
        @click.stop="addRemoveCityFromFavorites(city)"
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
      <span>{{ city.main.temp }} ºC</span>
      <span class="icon-delete" @click.stop="deleteCity(city.id)">
        <img src="../../assets/delete-red.svg" alt="icon-star" width="20px" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["city"],
  data: function() {
    return {
      icon: `http://openweathermap.org/img/wn/${this.city.weather[0].icon}@2x.png`,
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

      isFavorite
        ? this.$store.commit("removeCityFromFavorites", city)
        : this.$store.commit("addCityToFavorites", city);
    },
  },
  computed: {
    isFavorite: function() {
      return this.$store.getters.isFavorite(this.city.id);
    },
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
