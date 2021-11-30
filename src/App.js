import "./App.css";
import { useEffect, useState } from "react";
import { Box, Button, TextInput} from "grommet";

import TodaysWeather from "./pages/TodaysWeather";
import PastArray from "./pages/PastArray";
import Forecasts from "./pages/Forecasts";
import { Grommet } from "grommet";
import { Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';

import Navigation from "./components/nav/Navigation";
import DetailedIcon from "./components/UI/DetailedIcon";

function App() {
  // const [isItDay,setIsItDay] = useState(false);
  const [currentCity, setCurrentCity] = useState("Delhi");
  const history = useHistory();

  const [currentDetails, setCurrentDetails] = useState({});

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=8f5839e359a247618e491742210211&q=${currentCity}&aqi=yes`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentDetails({...data});
      });
      history.push('/')
  }, []);
  const submitCityHandler = () => {
    // fetch(
    //   `http://api.weatherapi.com/v1/current.json?key=8f5839e359a247618e491742210211&q=${currentCity}&aqi=yes`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setCurrentDetails({...data});
    //   });
       history.push('/')
  };
  console.log(currentDetails)
  return (
    <Grommet plain align="center">
      <Box background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)">
        <Box pad="medium" width="40%" margin="auto" >
          <TextInput
            placeholder="Enter your City"
            // value={value}
            onChange={(e) => setCurrentCity(e.target.value)}
            color="white"
          />          
          <br />
          <Button
            primary
            padding="small"
            size="small"
            label="Check Weather"
            onClick={submitCityHandler}
          />
        </Box>
        {/* {currentDetails.length !== 0 && <Box margin="auto">
          {currentDetails.length !== 0  ? (
            <DetailedIcon
              temp={currentDetails.current.temp_c}
              icon={currentDetails.current.condition.icon}
              text={currentDetails.current.condition.text}
              day={currentDetails.current.isDay}
            />
          ) : (
            "Please Enter a city to begin"
          )}
        </Box>} */}
        <br />
        <Navigation />
      </Box>
      
      <Switch>
        <Route path="/" exact>
          <TodaysWeather details={currentDetails} />         
        </Route>
        <Route path="/past-weather">
          <PastArray place={currentCity} />
        </Route>
        <Route path="/forecasts">
          <Forecasts place={currentCity}/>
        </Route>
      </Switch>
    </Grommet>
  );
}

export default App;
