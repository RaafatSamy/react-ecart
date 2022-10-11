import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./Components/Header";
// pages
import { Router } from "@reach/router";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import PageNofFound from "./Pages/PageNofFound";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
        <PageNofFound path="**" />
      </Router>
    </main>
  );
}

export default App;
