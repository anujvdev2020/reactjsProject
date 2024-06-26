import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col } from "react-bootstrap";
const Navigation = () => {
  return (
    <Container fluid>
      <Navbar fixed="bottom">
        <Container fluid="md">
          <Row>
            <Col> <Link to="/">Homepage </Link></Col>
            <Col> <Link to="/cart">Cart</Link></Col>
          </Row>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
