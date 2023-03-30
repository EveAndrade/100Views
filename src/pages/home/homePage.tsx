import { homeStyle } from "./homePage.style";
import * as DataBase from "../../utils/data";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Carousel from "react-material-ui-carousel";

function HomePage() {
  const classes = homeStyle();
  const fullData = DataBase.ART_CATEGORY;
  const paintingSlides = DataBase.ART_LIST;
  const categoryBgs = DataBase.THEME_BACKGROUNDS;
  const categoryLabel = DataBase.PAINTING_LABEL;

  return (
    <> 
      {fullData.map((cat, index) => (
        <div key={index}>
          <Box
            sx={{
              display:"flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              backgroundImage: `url(${categoryBgs[index]})`,
              backgroundSize: "cover"
            }}
          >
            <Box sx={classes.centralDisplay}>
              <Box sx={classes.textDisplay}>
                <Typography  sx={classes.categoryText}>
                  {categoryLabel[index]}
                </Typography>

                {cat.map((info, index) => (
                  <Box key={index} sx={classes.infoPair}>
                    <Typography sx={classes.infoType}>
                      {info[0]}
                    </Typography>

                    <Typography sx={classes.infoValue}variant="body2">
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
                  duration={700}
                  navButtonsProps={{      
                    style: {
                        backgroundColor: "black",
                        opacity: "60%",
                    }
                  }} 
                >
                  {
                    paintingSlides[index].map((img, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: window.innerWidth > window.innerHeight ?
                            "calc(100vh - 48px)" : "calc(100vw*0.7)",
                          height: window.innerWidth > window.innerHeight ?
                            "calc(100vh - 48px)" : "calc(100vw*0.7)",
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

          {(index !== fullData.length -1) &&
            <Divider
              sx={{ borderTopWidth: 8, bgcolor: "#eba731" }}
            />
          }
        </div>
        
      ))}              
    </>
  )
}

export default HomePage;
