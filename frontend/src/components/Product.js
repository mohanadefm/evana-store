import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card style={{ minHeight: "450px" }} className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <div
          style={{
            height: "200px",
            width: "auto",
          }}
        >
          <Card.Img src={product.image} variant="top" />
        </div>
      </Link>

      <Card.Body style={{ marginTop: "20px" }}>
        <Link to={`/product/${product._id}`}>
          <Card.Title vas="div">
            <strong style={{ fontSize: "14px" }}>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
