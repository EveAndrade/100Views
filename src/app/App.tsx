import * as React from "react";

import { appStyle } from "./App.style";
import { defaultTheme } from "../utils/defaultTheme";
import * as DataBase from "../utils/data"

import DiscordIcon from "../../public/icons/discordIcon";
import FantasyIcon from "../../public/icons/fantasyIcon";
import TweetIcon from "../../public/icons/tweetIcon";

import HomePage from "../pages/home/homePage";
import DetailsPage from "../pages/details/detailsPage";
import TOSPage from "../pages/tos/tosPage";
import AboutPage from "../pages/about/aboutPage";
import CreditsPage from "../pages/credits/creditsPage";

import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import Fab from "@mui/material/Fab";
import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";

function App() {
  const classes = appStyle();
  const [pageNumber, setPageNumber] = React.useState(0);
  const pageType = DataBase.PageType;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPageNumber(newValue);
  };

  const scrollableTabs = useMediaQuery(defaultTheme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={defaultTheme}>
        <Box sx={classes.root}>
          <Box sx={classes.header}>
            <Typography margin="32px" sx={classes.headerText}>
              A Hundred Views of Fantasy
            </Typography>          
          </Box>
          <Tabs 
            value={pageNumber}
            onChange={handleChange}
            sx={classes.tabsList}
            variant={scrollableTabs ? "scrollable" : "standard" }
            scrollButtons="auto"
            allowScrollButtonsMobile
            centered={!scrollableTabs}
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
            <Tab 
              id={pageType.Credits}
              label="Credits"
              sx={classes.tabTitle}
            />
          </Tabs>
          <Box sx={classes.body}>
            {pageNumber === 0 &&
              <HomePage/>
            }
            {pageNumber === 1 &&
              <DetailsPage/>
            }
            {pageNumber === 2 &&
              <TOSPage/>
            }
            {pageNumber === 3 &&
              <AboutPage/>
            }
            {pageNumber === 4 &&
              <CreditsPage/>
            }
          </Box>

          <Box sx={classes.footer}>
            <Box sx={classes.innerFooter}>
              <Box sx={classes.contact}>
                <DiscordIcon/>
                <Typography sx={classes.contactText}>
                  .eveknight
                </Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={classes.footerDivider}
              />

              <Box sx={classes.contact}>
                <TweetIcon/>
                <Typography sx={classes.contactText}>
                  @eve_pona
                </Typography>
              </Box>

              <Divider
                orientation="vertical"
                sx={classes.footerDivider}
              />
              
              <Box sx={classes.contact}>
                <FantasyIcon/>
                <Typography sx={classes.contactText}>
                  Eve Silvermoon ❁ Behemoth [Primal]
                </Typography>
              </Box>
            </Box>
          </Box>          
        </Box>

        <Box
          sx={classes.scrollTop}>
            <Fab
              sx={classes.autoScrollFab}
              onClick={() => {
                window.scrollTo({
                  top: document.body.offsetHeight,
                  left: 0,
                  behavior: "smooth"
                });
              }}
            >
              <KeyboardArrowDown color="primary"/>
            </Fab>
        </Box>

        <Box
          sx={classes.scrollBottom}>
            <Fab
              sx={classes.autoScrollFab}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}
            >
              <KeyboardArrowUp  color="primary"/>
            </Fab>
        </Box>
    </ThemeProvider>
  )
}

export default App;
