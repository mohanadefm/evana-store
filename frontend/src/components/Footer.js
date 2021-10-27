import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" style={{ height: "60px" }}>
      <Container style={{ display: "block" }}>
        <Row>
          <Col
            className="text-center py-3"
            style={{ display: "block", fontSize: "large" }}
          >
            All rights reserved &copy; Evana 2021
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;
