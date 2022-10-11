import React, { useState, useEffect } from "react";
import { Container, Row, Col, FormControl, InputGroup } from "react-bootstrap";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../Components/ProductCard";

function Home() {
  const [theme] = useThemeHook();
  const [inputSearch, setInputSearch] = useState("");
  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductData(res);
  }

  useEffect(() => {
    getResponse();
    console.log(productData);
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={theme ? "text-light my-5" : "text-black my-5"}>
            Search Products
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "bg-black text-dark-primary"
                  : "bg-light text-light-primary"
              }
            >
              <BiSearch sixe="2rem" />
            </InputGroup.Text>
            <FormControl
              placeholder="Search..."
              value={inputSearch}
              onChange={($e) => setInputSearch($e.target.value)}
              className={
                theme
                  ? "bg-light-black text-light"
                  : "bg-light text-light-primary"
              }
            />
          </InputGroup>
        </Col>
        <SearchFilter
          value={inputSearch}
          data={productData}
          renderResults={(results) => (
            <Row className="justify-content-center">
              {results.map((item, i) => {
                return <ProductCard data={item} key={i} />;
              })}
            </Row>
          )}
        />
      </Row>
    </Container>
  );
}

export default Home;
