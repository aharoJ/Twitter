import React from "react";

import "./assets/global.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Landing } from "./pages/Landing";
import { Theme } from "./utils/GlobalInterfaces";

const theme: Theme = {
  colors: {
    blue: "#1da1f2",
    black: "#14171a",
    darkGray: "#657786",
    lightGray: "#aab8c2",
    offWhite: "#e1e8ed",
    white: "#f5f8fa",
    error: "red",
  },
};

const GlobalStyle = createGlobalStyle`
*{
  font-family: "IBM Plex Sans", sans-serif;
  font-weight: 500;
}
`;

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Landing />
    </ThemeProvider>
  );
};
