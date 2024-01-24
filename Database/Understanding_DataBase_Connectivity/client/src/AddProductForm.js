import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    imageUrls: [], // Initialize as an empty array for multiple image URLs
  });

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageInputChange = (e) => {
    const { name, value } = e.target;
    // Split the input value by line breaks to create an array of image URLs
    setFormData({ ...formData, [name]: value.split("\n") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Express API to add a new product
      await axios.post("/products/add", formData);

      // Clear the form fields after successful submission
      setFormData({
        title: "",
        description: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        brand: "",
        category: "",
        thumbnail: "",
        imageUrls: [],
        // Reset other form fields here
      });

      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Error adding product. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <br />

      <label htmlFor="price">Price:</label>
      <input
        type="text"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="discountPercentage">DiscountPercentage:</label>
      <input
        type="text"
        id="discountPercentage"
        name="discountPercentage"
        value={formData.discountPercentage}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="brand">Stock:</label>
      <input
        type="text"
        id="stock"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        id="brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="category">category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="thumbnail">Thumbnail:</label>
      <input
        type="text"
        id="thumbnail"
        name="thumbnail"
        value={formData.thumbnail}
        onChange={handleChange}
        required
      />
      <br />

      <label htmlFor="imageUrls">Image URLs (One per line):</label>
      <textarea
        id="imageUrls"
        name="imageUrls"
        value={formData.imageUrls.join("\n")} // Join array with line breaks
        onChange={handleImageInputChange}
        required
      ></textarea>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProductForm;
