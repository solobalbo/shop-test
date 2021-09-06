import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
const data = require("../../public/products.json");

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${products._id}`}>
        <Card.Img src={products.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${products._id}`}>
          <Card.Title as="div">
            <strong>{products.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={products.rating}
            text={`${products.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${products.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductsScreen;
