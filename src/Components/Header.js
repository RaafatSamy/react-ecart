import React, { useContext, useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";
import { BiSun, BiMoon, BiCart } from "react-icons/bi";
import { Link } from "@reach/router";
import { useCart } from "react-use-cart";

function Header() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkTheme] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
  }, [darkMode]);

  const { isEmpty, totalItems } = useCart();

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      sticky="top"
      variant={darkMode ? "dark" : "light"}
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      style={{ width: "100%", zIndex: 1000000 }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>Simple-ecart</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkTheme(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/cart"
              className={`${
                darkMode ? "text-darkprimary" : "text-light-primary"
              } d-flex align-items-center `}
            >
              <BiCart size="2rem" />
              {!isEmpty && (
                <span
                  style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
              <span style={{ marginLift: !isEmpty ? "-13px" : 0 }}>Cart</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
