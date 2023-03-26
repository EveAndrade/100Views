import { creditsStyle } from "./creditsPage.style"
import * as DataBase from "../../utils/data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

function CreditsPage() {
  const classes = creditsStyle();
  const termsList = DataBase.CREDITS_LIST;

  return (
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>
                {termsList.map((term, index) => (
                    <>
                        <Box key={index} sx={classes.display}>
                            <Box sx={classes.question}>
                                <Typography color="white" variant="h6">
                                    {term[0]}
                                </Typography>          
                            </Box>
                    
                            <Box sx={classes.reasons}>
                                {typeof term[1] !== "string" && term[1].map((content, index) => (
                                    <Box key={index} sx={classes.infoPair}>
                                        <Typography
                                            color="#EBA731"
                                            sx={{ paddingLeft:"8px", marginBottom:"8px"}}
                                            variant="body2"
                                        >
                                            {content}
                                        </Typography>
                                    </Box> 
                                ))}
                            </Box>
                        </Box>
                        
                        {(index !== termsList.length -1) &&
                            <Divider
                                sx={{ borderTopWidth: 4, bgcolor: "white" }}
                            />
                        }
                    </>
                ))}
            </Box>
        </Box> 
  );
}

export default CreditsPage;