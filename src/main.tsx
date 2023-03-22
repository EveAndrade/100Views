import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home/homePage";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
  </React.StrictMode>,
);
