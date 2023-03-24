import * as React from "react";
import { categoryStyle } from "./canvasCategory.style"
import { defaultTheme } from "../../defaultTheme";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Carousel from 'react-material-ui-carousel';

interface CanvasProp {
  category: string[][];
  id: number;
}

function CanvasCategory(prop: CanvasProp) {
  const classes = categoryStyle();

  return (
    <ThemeProvider key={prop.id} theme={defaultTheme}>
        <Box sx={classes.categoryDisplay}>
            <Box sx={classes.centralDisplay}>
                <Box sx={classes.textDisplay}>
                  {prop.category.map((info, index) => (
                    <Box key={index} sx={classes.infoPair}>
                      <Typography color="white" variant="body1">
                        {info[0]}
                      </Typography>

                      <Typography sx={{ color:"#EBA731", paddingTop:"2px", paddingLeft:"6px"}}variant="body2">
                        {info[1]}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box sx={classes.paintingsDisplay}>
                  <Carousel>
                    
                  </Carousel>
                </Box>
           </Box>
        </Box> 
    </ThemeProvider>
  );
}

export default CanvasCategory;
