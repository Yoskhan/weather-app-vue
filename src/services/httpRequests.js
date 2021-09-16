import axios from "axios";
import i18n from "../i18n";

import { convertDayHRtoENG } from "../utils/convertDayHRtoENG";

export const getCityData = (city) => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=2d68358918888f615d0902c866620ffa&lang=${i18n.locale}&units=metric`
    )
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getFavoriteCitiesData = (city) => {
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=2d68358918888f615d0902c866620ffa&lang=${i18n.locale}&units=metric`
    )
    .then((response) => {
      // handle success
      return response.data;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getCityWeekData = (city) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=2d68358918888f615d0902c866620ffa&lang=${i18n.locale}&exclude=minutely,hourly,current&units=metric`
    )
    .then((response) => {
      // handle success
      return response.data.daily.slice(0, 5);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getByHourData = (cityId, daySelected) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=2d68358918888f615d0902c866620ffa&lang=${i18n.locale}&units=metric`
    )
    .then((response) => {
      // handle success
      let cityName = "";
      const hoursData = [];
      let dateSelected = "";

      cityName = response.data.city.name;

      response.data.list.forEach((dataByHour) => {
        const timestamp = dataByHour.dt;

        const day = new Date(timestamp * 1000).toLocaleDateString("en", {
          weekday: "short",
        });

        if (convertDayHRtoENG(daySelected) === day) {
          hoursData.push(dataByHour);
        }
      });

      const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };

      dateSelected = new Date(hoursData[0].dt * 1000).toLocaleDateString(
        i18n.locale,
        options
      );

      const byHourData = {};

      byHourData.cityName = cityName;
      byHourData.hoursData = hoursData;
      byHourData.dateSelected = dateSelected;
      byHourData.locale = i18n.locale;

      return byHourData;
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
