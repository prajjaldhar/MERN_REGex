import React, { useState, useEffect } from "react";
import axios from "axios";

const GetProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/products/allproducts"); // Replace with your actual API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product._id}>
            <div className="card mb-3">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">
                  Discount Percentage: {product.discountPercentage}%
                </p>
                <p className="card-text">Stock: {product.stock}</p>
                <p className="card-text">Brand: {product.brand}</p>
                <p className="card-text">Category: {product.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetProducts;
