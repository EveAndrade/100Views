import { detailsStyle } from "./detailsPage.style"

import DetailsListing from "./detailsContents/detailsListing";
import DetailsTitled from "./detailsContents/detailsTitled";

import Box from "@mui/material/Box";

function DetailsPage() {
  const classes = detailsStyle();

  return (
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>
                <DetailsListing
                    colorType={0}
                    id={0}
                />

                <DetailsTitled
                    colorType={0}
                    id={1}
                />
                
                <DetailsTitled
                    colorType={0}
                    id={2}
                />

                <DetailsListing
                    colorType={0}
                    id={3}
                />
            </Box>
        </Box> 
  );
}

export default DetailsPage;
