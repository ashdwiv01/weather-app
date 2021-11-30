import { Box, DateInput } from "grommet";
import { useEffect, useState } from "react";
import PastDate from "../components/UI/PastDate";

const Forecasts = (props) => {
  const [currentDay, setCurrentDay] = useState();
  const [forecastDetails, setForecastDetails] = useState({});
  const [daysForecastList, setDaysForecastList] = useState([]);
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=8f5839e359a247618e491742210211&&q=${props.place}&days=3&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setForecastDetails({ ...data });
        setDaysForecastList([...data.forecast.forecastday]);
      });
  }, []);
  console.log(daysForecastList);
  return (
    <Box>
    {props.place && <Box width="90%" margin="auto" gap="small">
      
      {daysForecastList.map((dayForecast) => {
        return (
          <PastDate
            icon={dayForecast.day.condition.icon}
            text={dayForecast.day.condition.text}
            temp={dayForecast.day.avgtemp_c}
            date={dayForecast.date}
            max_temp={dayForecast.day.maxtemp_c}
            min_temp={dayForecast.day.mintemp_c}
            humidity={dayForecast.day.avghumidity}
          />
        );
      })}
    </Box>}
    </Box>
  );
};

export default Forecasts;
