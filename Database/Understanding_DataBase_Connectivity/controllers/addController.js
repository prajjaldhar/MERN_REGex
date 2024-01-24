const addController = async (req, res) => {
  try {
    // Create a new product based on the request body
    const newProduct = new electronics(req.body);

    // Save the new product to the database
    await newProduct.save();

    // Respond with a success message
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "An error occurred" });
  }
};
export default addController;
