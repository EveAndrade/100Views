import * as React from "react";
import { categoryStyle } from "./canvasCategory.style"
import { defaultTheme } from "../../defaultTheme";

import Carousel from 'react-material-ui-carousel';
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
    category: string[][],
    key: number
}

const CanvasCategory = (props: Props) => {
  //const [count, setCount] = useState(0)
  const classes = categoryStyle();
    console.log(props.category);
  return (
    <ThemeProvider key={props.key} theme={defaultTheme}>
        <Box sx={classes.categoryDisplay}>
            <Box sx={classes.centralDisplay}>
                <Box sx={classes.textDisplay}>
                    <Box sx={{ paddingTop: "12px" }}>
                        {props.category.map((info, index) => (
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
                </Box>

                <Box sx={classes.paintingsDisplay}>
                      
                </Box>
           </Box>
        </Box> 
    </ThemeProvider>
  );
}

export default CanvasCategory;
