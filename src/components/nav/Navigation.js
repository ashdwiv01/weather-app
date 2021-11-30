import { Link } from "react-router-dom";
import { Box} from "grommet";
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <>
      <Box background="transparent" direction="row" className={classes.bar}>   
        
            <li>
              <Link to="/past-weather">Last Week</Link>
            </li>
            <li>
              <Link to="/">Current</Link>
            </li>
            <li>
              <Link to="/forecasts">
                Forecasts                
              </Link>
            </li>
          
        
      </Box>
      
    </>
  );
};

export default Navigation;
