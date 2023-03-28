import { tosStyle } from "./tosPage.style"
import * as DataBase from "../../utils/data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function TOSPage() {
  const classes = tosStyle();
  const termsList = DataBase.TOS_LIST;

  return (
        <Box sx={classes.centralBox}>
            <Box sx={classes.centralDisplay}>
                {termsList.map((term, index) => (
                    <Box key={index} sx={classes.display}>
                        <Box sx={classes.question}>
                            <Typography color="#611913" >
                                {term[0]}
                            </Typography>          
                        </Box>

                        <Box sx={classes.reasons}>
                            {typeof term[1] !== "string" && term[1].map((content, index) => (
                                <Box key={index} sx={classes.infoPair}>
                                    <Typography color="white" sx={classes.reasonText}>
                                        {`${index + 1}.`}
                                    </Typography>

                                    <Typography
                                        color="#EBA731"
                                        sx={classes.reasonTextPadded}
                                        variant="body2"
                                    >
                                        {content}
                                    </Typography>
                                </Box> 
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box> 
  );
}

export default TOSPage;
