import { listingStyle } from "./details.style"
import * as DataBase from "../../../utils/data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface DetailsProp {
    colorType: number;
    id: number;
  }

function DetailsListing(prop: DetailsProp) {
    const classes = listingStyle();
    const detailList = DataBase.DETAILS_LIST[prop.id];
    const display = prop.colorType === 0 ? classes.detailDisplayRed : classes.detailDisplayYellow;
    const titleColor = prop.colorType === 0 ? "#611913" : "white";
    const textColor = prop.colorType === 0 ? "#EBA731" : "white";
    const numberColor = prop.colorType === 0 ? "white" : "#611913";
    
    return (   
        <Box sx={display}>
            <Box
                sx={classes.question}
            >
                <Typography color={titleColor} sx={classes.questionText}>
                    {detailList[0]}
                </Typography>          
            </Box>
            
            <Box sx={classes.reasons}>
                {typeof detailList[1] !== "string" && detailList[1].map((content, index) => (
                    <Box key={index} sx={classes.infoPair}>
                        <Typography color={numberColor} sx={classes.reasonText}>
                            {`${index + 1}.`}
                        </Typography>

                        <Typography
                            color={textColor}
                            sx={classes.reasonTextPadded}
                        >
                            {content}
                        </Typography>
                    </Box>
                ))}                
            </Box>
        </Box>
    );
}

export default DetailsListing;
