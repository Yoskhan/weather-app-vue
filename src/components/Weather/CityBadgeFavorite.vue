<template>
  <div class="container-city-badge">
    <div class="title-city">{{ city.name }}</div>
    <div class="icon">
      <img :src="icon" alt="weather-icon" width="80" height="80" />
    </div>
    <span>{{ city.main.temp }}ºC</span>
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
