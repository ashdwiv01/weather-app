import { Box, Text } from "grommet";

const TodaysWeather = (props) => {
  
  return (
    
      <Box width="100%" height="100%" align="center" background="#ffa07a">
        
        { props.details.temp && <Box pad="small"          
            direction="row"
            elevation="medium"
            round="small">
          <Box
            pad="medium"          
            direction="column"            
          >
            <Text>Feels Like          : {props.details.feelslike}°C</Text>
            <Text>Humidity  : {props.details.humidity}%</Text>
            <Text>Pressure            : {props.details.pressure} mb</Text>
            <Text>Precipitation       : {props.details.precipitation} mm</Text>
          </Box>
          <Box
            pad="medium"          
            direction="column"
            
          >
            <Text>UV Index            : {props.details.UV}</Text>
            <Text>Visibility          : {props.details.visibility} Km</Text>
            <Text>Wind Direction      : {props.details.wind_dir}</Text>
            <Text>Wind Speed          : {props.details.wind_speed} kph</Text>

          </Box>
      </Box>}
      </Box>
    
  );
};

export default TodaysWeather;
