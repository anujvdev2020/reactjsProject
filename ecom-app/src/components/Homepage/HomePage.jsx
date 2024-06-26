import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useCart from "../Hooks/useCart";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const { addItem, removeItem ,addedToCart} = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          let quantityUpdated = json.map((item) => {
            return { ...item, quantity: 0 };
          });
          setProducts(quantityUpdated);
        }
      });
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product, id) => {
          return (
            <Col md={4} lg={4} key={id}>
              <Card style={{ width: "18rem" }}>
                <Link to={`/product/${product.id}`}>
                  <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  {addedToCart(product)?
                    <Button
                    variant="success"
                    onClick={() => addItem(product)}
                  >
                    Remove from Cart
                  </Button>

                  :<Button
                    variant="primary"
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </Button>}
                  
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export { HomePage };
