import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import PastDate from "../components/UI/PastDate";
import { Box } from "grommet";

const Past = (props) => {
  const qDate = props.dt;
  const place = props.place;
  const [pastDetails, setPastDetails] = useState({
    astro: {
      moon_phase: "",
      moonrise: "",
      moonset: "",
      sunrise: "",
      sunset: "",
    },
    date: "",
    day: {
      condition: {
        icon: "",
        text: "",
      },
      avghumidity: "",
      avgtemp_c: "",
      avgvis_km: "",
      maxtemp_c: "",
      maxwind_kph: "",
      mintemp_c: "",
      totalprecip_mm: "",
      uv: "",
    },
  });

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/history.json?key=8f5839e359a247618e491742210211&q=${place}&dt=${qDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPastDetails({
          astro: {
            moon_phase: data.forecast.forecastday[0].astro.moon_phase,
            moonrise: data.forecast.forecastday[0].astro.moonrise,
            moonset: data.forecast.forecastday[0].astro.moonset,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
          },
          date: data.forecast.forecastday[0].date,
          day: {
            condition: {
              icon: data.forecast.forecastday[0].day.condition.icon,
              text: data.forecast.forecastday[0].day.condition.text,
            },
            avghumidity: data.forecast.forecastday[0].day.avghumidity,
            avgtemp_c: data.forecast.forecastday[0].day.avgtemp_c,
            avgvis_km: data.forecast.forecastday[0].day.avgvis_km,
            maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
            maxwind_kph: data.forecast.forecastday[0].day.maxwind_kph,
            mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
            totalprecip_mm: data.forecast.forecastday[0].day.totalprecip_mm,
            uv: data.forecast.forecastday[0].day.uv,
          },
        });
      });
  }, []);

  return (
    // <Link to="/">back</Link
    <Box width="90%" margin="auto" gap="small">
      {props.place && (
        <PastDate
          icon={pastDetails.day.condition.icon}
          text={pastDetails.day.condition.text}
          temp={pastDetails.day.avgtemp_c}
          date={pastDetails.date}
          max_temp={pastDetails.day.maxtemp_c}
          min_temp={pastDetails.day.mintemp_c}
          humidity={pastDetails.day.avghumidity}
        />
      )}
    </Box>
  );
};

export default Past;
