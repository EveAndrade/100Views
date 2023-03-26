import { aboutStyle } from "./aboutPage.style";
import profile from "../../assets/bgs/profile.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutPage() {
  const classes = aboutStyle();

  return (
    <Box sx={classes.centralBox}>
        <Box sx={classes.centralDisplay}>
            <Box sx={classes.profileDisplay}>
                <Box sx={classes.greetings}>
                    <Typography variant="h3">
                        Hello
                    </Typography>          
                </Box>
                
                <Box sx={classes.picture}>
                    <Box
                        sx={{
                            borderRadius: "50%",
                            width: "350px",
                            height: "350px",
                            backgroundImage: `url(${profile})`,
                            backgroundSize: "cover"
                        }}
                    />
                </Box>

                <Box sx={classes.greetings}>
                    <Typography variant="h3">
                        There
                    </Typography> 
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

                    <Typography color="#EBA731" variant="body1" marginBottom="24px">
                        I hope I can make your day a little better
                        with my scribbles. :D
                    </Typography>

                    <Typography color="white" variant="caption">
                        PS: Oh yeah, I did all the assets and coding, hope you like it ÓwÒ
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutPage;