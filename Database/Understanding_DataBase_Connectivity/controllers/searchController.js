const searchController = async (req, res) => {
  try {
    // Extract the query parameters from the URL
    const { name, brand, category, price } = req.query;

    // Define a query object to filter the products
    const query = {};

    if (name) {
      query.name = name;
    }

    if (brand) {
      query.brand = brand;
    }

    if (category) {
      query.category = category;
    }

    if (price) {
      query.price = price;
    }

    // Use the 'electronics' model to find products based on the query
    const products = await electronics.find(query);

    if (products.length === 0) {
      // If no products match the query, respond with a not found message
      res
        .status(404)
        .json({ message: "No products found for the given criteria" });
    } else {
      // If products are found, respond with the matching products
      res.status(200).json({ products });
    }
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
};
export default searchController;
