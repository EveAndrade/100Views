import { categoryStyle } from "./canvasCategory.style"
import { defaultTheme } from "../../defaultTheme";
import * as DataBase from "../../data";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

import Carousel from 'react-material-ui-carousel';

interface CanvasProp {
  category: string[][];
  id: number;
}

function CanvasCategory(prop: CanvasProp) {
  const classes = categoryStyle();
  const paintingSlides = DataBase.ART_LIST;
  const categoryBgs = DataBase.THEME_BACKGROUNDS;

  return (
    <ThemeProvider key={prop.id} theme={defaultTheme}>
        <Box sx={{
          display:"flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${categoryBgs[prop.id]})`,
          backgroundSize: "cover"
        }}>
            <Box sx={classes.centralDisplay}>
                <Box sx={classes.textDisplay}>
                  {prop.category.map((info, index) => (
                    <Box key={index} sx={classes.infoPair}>
                      <Typography color="white" variant="body1">
                        {info[0]}
                      </Typography>

                      <Typography sx={{ color:"#EBA731", paddingTop:"2px", paddingLeft:"8px"}}variant="body2">
                        {info[1]}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                  
                <Divider
                  sx={{ borderTopWidth: 4, bgcolor: "#EBA731" }}
                />
                  
                <Box sx={classes.paintingsDisplay} >
                  <Carousel
                    sx={classes.carouselDisplay}
                    navButtonsAlwaysVisible={true}
                    animation={"slide"}
                    duration={600}
                    navButtonsProps={{      
                      style: {
                          backgroundColor: "black",
                          opacity: "60%",
                      }
                    }} 
                  >
                    {
                     paintingSlides[prop.id].map((img, index) => (
                        <Box
                          key={index}
                          sx={{
                          width: "500px",
                          height: "500px",
                          backgroundColor: "white",
                          backgroundImage: `url(${img})`,
                          backgroundSize: "cover"
                          }}
                        />
                      ))
                    }
                  </Carousel>                  
                </Box>
           </Box>
        </Box> 
    </ThemeProvider>
  );
}

export default CanvasCategory;
