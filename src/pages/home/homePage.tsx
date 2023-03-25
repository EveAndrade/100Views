import * as React from "react";
import { homeStyle } from "./homePage.style";
import { defaultTheme } from "../defaultTheme";
import * as DataBase from "../data"

import DiscordIcon from "../../assets/icons/discordIcon";
import FantasyIcon from "../../assets/icons/fantasyIcon";
import TweetIcon from "../../assets/icons/tweetIcon";

import CanvasCategory from "./homeContent/canvasCategory";
import AboutPage from "../about/aboutPage";
import DetailsPage from "../details/detailsPage";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';

import { Routes, Route } from "react-router-dom"




function HomePage() {
  //const [count, setCount] = useState(0)
  const classes = homeStyle();
  const [pageNumber, setPageNumber] = React.useState(0);
  const pageType = DataBase.PageType;
  const fullData = DataBase.ART_CATEGORY;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPageNumber(newValue);
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={classes.root}>
        <Box sx={classes.header}>
          <Typography variant="h3">
            A Hundred Views of Fantasy
          </Typography>          
        </Box>

        <Box sx={classes.body}>
          {pageNumber === 0 &&
            <> 
              {fullData.map((cat, index) => (
                <>
                  <CanvasCategory
                    category={cat}
                    id={index}
                  />
                  {(index !== fullData.length -1) &&
                    <Divider
                      sx={{ borderTopWidth: 8, bgcolor: "#eba731" }}
                    />
                  }
                </>
                
              ))}              
            </>
            
          }

          {pageNumber === 1 &&
            <DetailsPage/>
          }

          {pageNumber === 3 &&
            <AboutPage/>
          }
        </Box>

        <Box sx={classes.menu}>
          <Tabs
            value={pageNumber}
            onChange={handleChange}
          >
            <Tab 
              id={pageType.Home}
              label="Home"
              sx={classes.tabTitle}
            />
            <Tab 
              id={pageType.Details}
              label="Details"
              sx={classes.tabTitle}
            />
            {/* <Tab 
              id={pageType.Gallery}
              label="Gallery"
              sx={classes.tabTitle}
            /> */}
            <Tab 
              id={pageType.ToS}
              label="Tos"
              sx={classes.tabTitle}
            />
            <Tab 
              id={pageType.About}
              label="About"
              sx={classes.tabTitle}
            />
          </Tabs>
        </Box>

        <Box sx={classes.footer}>
          <Box sx={classes.contact}>
            <DiscordIcon/>
            <Typography variant="body2">
              Eve#8210
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, bgcolor: "#eba731" }}
          />

          <Box sx={classes.contact}>
            <TweetIcon/>
            <Typography variant="body2">
              @eve_pona
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            sx={{ borderRightWidth: 2, bgcolor: "#eba731" }}
          />
         
          <Box sx={classes.contact}>
            <FantasyIcon/>
            <Typography variant="body2">
              Eve Silvermoon ❁ Behemoth [Primal]
            </Typography>
          </Box>
          
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default HomePage;
