import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const dartTheme = {
  textColor: "whitesmoke",
  bgColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  bgColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dartTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
