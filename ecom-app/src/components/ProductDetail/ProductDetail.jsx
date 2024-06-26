import React, { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ProductDetail = () => {
  const [product, setProduct] = useState({
    id: 1,
    title: "...",
    price: "...",
    category: "...",
    description: "...",
    image: "...",
  });
  const { id } = useParams();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((json) => {
        if(json) setProduct(json)
      });
  }, []);

  return (
    <Container>
      <Row>
      <Col>
              
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title} Rs:{product.price}</Card.Title>
                  <Card.Text>
                   {product.description}
                  </Card.Text>
                  <Button variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
      </Row>
    </Container>
  );
};

export { ProductDetail };
