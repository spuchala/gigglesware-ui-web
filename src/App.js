import React from "react";

import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./config/theme-config";
import NavBar from "./components/nav-bar/nav-bar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={null}>
        <NavBar></NavBar>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
