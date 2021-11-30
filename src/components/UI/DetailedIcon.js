import { Box, Text } from "grommet";
import classes from './DetailedIcon.module.css'

const DetailedIcon = (props) => {
  const bgTheme = props.day ? '#ffc266': "grey";
  // const dark =  props.day ? "": "dark";
  return (
    <Box margin="auto" pad="small" background={bgTheme} direction="row" elevation="medium" width="16rem" round="small" alignContent="center">
      <Box margin="auto">
        <Box height="4rem" width="4rem" >
          <img src={props.icon} alt="..." />
        </Box>
        <Text size="large" textAlign="center" className={classes.wtext}>{props.text}</Text>
      </Box>
      <Text size="5xl" textAlign="center" className={classes.wtext}>{props.temp}°</Text>
    </Box>
  );
};

export default DetailedIcon;
