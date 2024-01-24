import React, { useEffect, useState } from "react";
import Product from "./Product";

const Cart = () => {
  const [Productdata, setProductData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setProductData(data);
        // console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          {Productdata.map((product) => (
            <Product
              title={product.title}
              description={product.description}
              imgscr={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cart;
