import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./Components/Header";
// pages
//import { Router } from "@reach/router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <Header />
        <Routes>
          <Route path="react-ecart/" element={<Home />} />
          <Route path="react-ecart/cart" element={<Cart />} />
          <Route path="*" element={<PageNofFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
