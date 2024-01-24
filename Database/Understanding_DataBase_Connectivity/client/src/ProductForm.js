import React, { useState } from "react";
import { Card, Button, Form, Image } from "react-bootstrap";
import "./ProductCard.css"; // Import the CSS file

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, formData]);
    setFormData({
      productName: "",
      productPrice: "",
      productDescription: "",
      productImage: null,
    });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="productName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="productPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="productImage">
          <Form.Label>Product Image (JPG)</Form.Label>
          <Form.Control
            type="file"
            accept=".jpg,.jpeg"
            name="productImage"
            onChange={handleImageChange}
          />
        </Form.Group>
        <Form.Group controlId="productDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>

      <div className="product-cards">
        {products.map((product, index) => (
          <Card key={index} className="movie-card">
            <Image src={URL.createObjectURL(product.productImage)} fluid />
            <Card.Body>
              <Card.Title>{product.productName}</Card.Title>
              <Card.Text>{product.productDescription}</Card.Text>
              <Card.Text>Price: {product.productPrice}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
