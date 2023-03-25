import { tosStyle } from "./tosPage.style"

import Box from "@mui/material/Box";

function TOSPage() {
  const classes = tosStyle();

  return (
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>                
            </Box>
        </Box> 
  );
}

export default TOSPage;
