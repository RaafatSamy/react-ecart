import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pageNotFound from "../images/page-not-found.png";

function PageNofFound() {
  return (
    <Container>
      <Row>
        <Col>
          <div
            style={{
              width: "100%",

              paddingTop: "60px",
              marginTop: "40px",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={pageNotFound}
              alt="Page Not Found"
              style={{
                borderRadius: "30px",
                height: "400px",
              }}
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PageNofFound;
