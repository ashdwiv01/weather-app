import { Box, Text } from "grommet";

const PastDate = (props) => {
    
    return (
        <Box id="panel" direction="row" elevation="medium" width="80%" margin="auto" pad="xxsmall" round="small" background="#ffffe0">
            <Box id="info" direction="column" margin="auto">
                <Box id="condition" direction="row">
                    <Box id="condition_icon" height="3rem" width="3rem">
                        <img src={props.icon} alt="..." />
                    </Box>
                    <Box>
                        <Text size="xxlarge" textAlign="center">{props.temp}°</Text>
                    </Box>
                    
                </Box>
                <Text size="small" textAlign="center" >{props.text}</Text>
            </Box>
            <Box pad="medium" margin="auto">
                <Text size="large" textAlign="center">{props.date}</Text>
            </Box>

            <Box pad="medium" direction="column" margin="auto">
                <Text size="large" textAlign="center">{props.max_temp}°</Text>
                <Text size="xsmall" textAlign="center">Max Temp.</Text>        
            </Box>

            <Box pad="medium" direction="column" margin="auto">
                <Text size="large" textAlign="center">{props.min_temp}°</Text>
                <Text size="xsmall" textAlign="center">Min Temp.</Text>               
            </Box>
            <Box pad="medium" direction="column" margin="auto">
                <Text size="large" textAlign="center">{props.humidity}</Text>
                <Text size="xsmall" textAlign="center">Humidity</Text> 
            </Box>
        </Box>
    );
};

export default PastDate;