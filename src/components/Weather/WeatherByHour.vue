<template>
  <div>
    <div class="container-date-city">
      <h1 class="city">{{ cityName }}</h1>
      <h4 class="date">{{ dateSelected }}</h4>
    </div>

    <div class="paper-for-hours">
      <div
        class="container-table-row"
        v-for="byHourData in hoursData"
        :key="byHourData.dt"
      >
        <div class="container-time">
          {{
            new Date(byHourData.dt * 1000).toLocaleString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })
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
import axios from "axios";
import i18n from "../../i18n";

import { convertDayHRtoENG } from "../../utils/convertDayHRtoENG";

export default {
  data: function() {
    return {
      hoursData: [],
      cityName: "",
      dateSelected: "",
      locale: i18n.locale,
    };
  },
  methods: {
    getIcon: function(iconId) {
      return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
    },
  },
  mounted() {
    const cityID = this.$route.params.city;
    const daySelected = this.$route.params.day;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=2d68358918888f615d0902c866620ffa&lang=${this.locale}&units=metric`
      )
      .then((response) => {
        this.cityName = response.data.city.name;

        response.data.list.forEach((dataByHour) => {
          let timestamp = dataByHour.dt;

          const day = new Date(timestamp * 1000).toLocaleDateString("en-US", {
            weekday: "short",
          });

          if (convertDayHRtoENG(daySelected) === day) {
            this.hoursData.push(dataByHour);
          }
        });

        const options = {
          weekday: "long",
          year: "numeric",
          month: "numeric",
          day: "numeric",
        };

        this.dateSelected = new Date(
          this.hoursData[0].dt * 1000
        ).toLocaleDateString(this.locale, options);
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
