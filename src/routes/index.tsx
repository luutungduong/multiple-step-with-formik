import { ThemeProvider } from "@emotion/react";
import { Container } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/header";
import { apiPath } from "../constants/menu";
import CheckoutPage from "../pages/checkout/checkout-page";
import HomePage from "../pages/home";
import { theme } from "../Theme/theme";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={apiPath.checkout} element={<CheckoutPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
