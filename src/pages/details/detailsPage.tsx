import { detailsStyle } from "./detailsPage.style"
import { defaultTheme } from "../defaultTheme";

import DetailsListing from "./detailsContents/detailsListing";
import DetailsTitled from "./detailsContents/detailsTitled";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function DetailsPage() {
  const classes = detailsStyle();

  return (
    <ThemeProvider theme={defaultTheme}>
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>
                <DetailsListing
                    colorType={0}
                    id={0}
                />

                <DetailsTitled
                    colorType={1}
                    id={1}
                />
                
                <DetailsTitled
                    colorType={0}
                    id={2}
                />

                <DetailsListing
                    colorType={1}
                    id={3}
                />
            </Box>
        </Box> 
    </ThemeProvider>
  );
}

export default DetailsPage;
