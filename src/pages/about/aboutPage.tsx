import { aboutStyle } from "./aboutPage.style";
import profile from "/bgs/profile.jpg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AboutPage() {
  const classes = aboutStyle();

  return (
    <Box sx={classes.centralBox}>
        <Box sx={classes.centralDisplay}>
            <Box sx={classes.profileDisplay}>
                <Box sx={classes.greetings}>
                    <Typography sx={classes.greetingsText}>
                        Hello There
                    </Typography>          
                </Box>
                
                <Box sx={classes.picture}>
                    <Box
                        sx={{
                            borderRadius: "50%",
                            width: window.innerWidth > window.innerHeight ?
                                "calc(100vh*0.3)" : "calc(100vw*0.3)",
                            height: window.innerWidth > window.innerHeight ?
                                "calc(100vh*0.3)" : "calc(100vw*0.3)",
                            backgroundImage: `url(${profile})`,
                            backgroundSize: "cover",
                        }}
                    />
                </Box>
            </Box>

            <Box sx={classes.descriptionDisplay}>
                <Box sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "auto",
                    marginBottom:"16px"
                }}>
                    <Typography color="white" sx={classes.greetingsText}>
                        Who?
                    </Typography>
                </Box>
            
                <Box sx={classes.mainText}>
                    <Typography color="#EBA731" sx={classes.sillyText}>
                        I'm Eve, nice to meet ya ~
                    </Typography>
                    
                    <Typography color="#EBA731" sx={classes.sillyText}>
                        I'm a 25 years old human being that works
                        as a programmer during the day,
                        punches bad monsters during the night
                        and draws random things in-between.
                    </Typography>

                    <Typography color="#EBA731" sx={classes.sillyText}>
                        I hope I can make your day a little better
                        with my scribbles. :D
                    </Typography>

                    <Typography color="white" sx={classes.sillyPS}>
                        PS: Oh yeah, I did all the assets and coding, hope you like it ÓwÒ
                    </Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AboutPage;