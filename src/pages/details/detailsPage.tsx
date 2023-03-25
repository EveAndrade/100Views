import { detailsStyle } from "./detailsPage.style"
import { defaultTheme } from "../defaultTheme";


import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

import Carousel from 'react-material-ui-carousel';


function DetailsPage() {
  const classes = detailsStyle();

  return (
    <ThemeProvider theme={defaultTheme}>
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>
                <Box sx={classes.introDisplay}>
                    <Box sx={classes.greetings}>
                        <Typography color="white" variant="h6">
                            Huh? Why Gil?
                        </Typography>          
                    </Box>
                    
                    <Box sx={classes.reasons}>
                        <Box sx={classes.infoPair}>
                            <Typography color="white" variant="body1">
                                1.
                            </Typography>

                            <Typography sx={{ color:"#EBA731", paddingLeft:"8px", marginBottom:"12px"}}variant="caption">
                                I dont' feel comfortable neither confident enough to charge real money.
                            </Typography>
                        </Box>

                        <Box sx={classes.infoPair}>
                            <Typography color="white" variant="body1">
                                2.
                            </Typography>

                            <Typography sx={{ color:"#EBA731", paddingLeft:"8px", marginBottom:"12px"}}variant="caption">
                                {"Game coin seems cheaper and less problematic (living abroad reasons)."}
                            </Typography>
                        </Box>

                        <Box sx={classes.infoPair}>
                            <Typography color="white" variant="body1">
                                3.
                            </Typography>

                            <Typography sx={{ color:"#EBA731", paddingLeft:"8px"}}variant="caption">
                                The real goal is have a stimulus to keep drawing and comissions are one
                                way to create a strong reason to finish what I'm scribbling,
                                because I'm doing this for someone else.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box sx={classes.descriptionDisplay}>
                    <Box sx={classes.mainText}>
                        <Typography color="white" variant="h6" marginBottom="36px">
                            Who?
                        </Typography>

                        <Typography color="#EBA731" variant="body1" marginBottom="8px">
                            I'm Eve, nice to meet ya ~
                        </Typography>
                        
                        <Typography color="#EBA731" variant="body1" marginBottom="8px">
                            I'm a 25 years old human being that works
                            as a programmer during the day,
                            punches bad monsters during the night
                            and draws random things in-between.
                        </Typography>

                        <Typography color="#EBA731" variant="body1">
                            I hope I can make your day a little better
                            with my scribbles. :D
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box> 
    </ThemeProvider>
  );
}

export default DetailsPage;
