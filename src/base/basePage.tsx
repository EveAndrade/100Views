import { defaultTheme } from "../pages/defaultTheme";
import { baseStyle } from "./basePage.style";

import { ThemeProvider } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import HomePage from "../pages/home/homePage";

function BasePage() {
  //const [count, setCount] = useState(0)
  const classes = baseStyle();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        {/* <Route path="/" element={<Details/>}/>
        <Route path="/" element={<Gallery/>}/>
        <Route path="/" element={<ToSPage/>}/>
        <Route path="/" element={<AboutPage/>}/> */}
      </Routes>
    </ThemeProvider>
  )
}

export default BasePage;
