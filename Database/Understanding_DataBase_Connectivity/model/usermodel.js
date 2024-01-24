import mongoose from "mongoose";
import electronics from "./userschema.js";
import connectDB from "../connection/db.js";

const createDocument = async () => {
  try {
    // Connect to the database
    await connectDB();

    const newItem = new electronics({
        id: 31,
        title: "iPhone 99",
        description: "An apple mobile which is in space",
        price: 54990,
        discountPercentage: 88.96,
        rating: 9.69,
        stock: 9,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
    });

    const result = await newItem.save();
    console.log("Document saved successfully:", result);
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};
createDocument();

// const getProducts = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Use the find() method to retrieve all documents from the Products collection
//     const Products = await electronics.find();

//     // Log the retrieved Products
//     console.log("Retrieved Products:");
//     console.log(Products);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// // // Call the getProducts function to retrieve and log the Products
// getProducts();

// const calculateAverageDiscountPercentageByBrand = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Use the aggregation framework to calculate the average discount percentage by brand
//     const result = await Product.aggregate([
//       {
//         $group: {
//           _id: "$brand",
//           averageDiscountPercentage: { $avg: "$discountPercentage" },
//         },
//       },
//       {
//         $sort: { averageDiscountPercentage: -1 }, // Sort by average discount percentage in descending order
//       },
//     ]);

//     if (result.length > 0) {
//       console.log("Average Discount Percentage by Brand:");
//       result.forEach((brandData) => {
//         console.log(
//           `${brandData._id}: ${brandData.averageDiscountPercentage.toFixed(2)}%`
//         );
//       });

//       // Determine the brand with the highest average discount percentage
//       const highestDiscountBrand = result[0]._id;
//       console.log(
//         `Brand with the highest average discount percentage: ${highestDiscountBrand}`
//       );
//     } else {
//       console.log("No products found.");
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// // Call the calculateAverageDiscountPercentageByBrand function to calculate and log the results
// calculateAverageDiscountPercentageByBrand();

// const listProductsInRangeAndRating = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Define the query criteria
//     const query = {
//       discountPercentage: { $gte: 10, $lte: 20 }, // Discount percentage between 10% and 20%
//       rating: { $gt: 4.2 }, // Rating greater than 4.2
//     };

//     // Use the find() method with the query criteria to retrieve matching products
//     const products = await Product.find(query);

//     if (products.length > 0) {
//       console.log(
//         "Products with discount between 10% and 20% and rating > 4.2:"
//       );
//       products.forEach((product) => {
//         console.log(`Product Name: ${product.title}`);
//         console.log(`Discount Percentage: ${product.discountPercentage}%`);
//         console.log(`Rating: ${product.rating}`);
//         console.log("------------------------");
//       });
//     } else {
//       console.log("No products found matching the criteria.");
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// // Call the listProductsInRangeAndRating function to retrieve and log the matching products
// listProductsInRangeAndRating();

// const createDocuments = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     const newProducts = [
//       {
//   id: 31,
//   title: "iPhone 99",
//   description: "An apple mobile which is in space",
//   price: 54990,
//   discountPercentage: 88.96,
//   rating: 9.69,
//   stock: 9,
//   brand: "Apple",
//   category: "smartphones",
//   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   images: [
//     "https://i.dummyjson.com/data/products/1/1.jpg",
//     "https://i.dummyjson.com/data/products/1/2.jpg",
//     "https://i.dummyjson.com/data/products/1/3.jpg",
//     "https://i.dummyjson.com/data/products/1/4.jpg",
//     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//   ],
// },

//       {
//         id: 32,
//         title: "Samsung Galaxy S22",
//         description: "A flagship smartphone from Samsung",
//         price: 49999,
//         discountPercentage: 10.5,
//         rating: 8.5,
//         stock: 15,
//         brand: "Samsung",
//         category: "smartphones",
//         thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
//         images: [
//           "https://i.dummyjson.com/data/products/2/1.jpg",
//           "https://i.dummyjson.com/data/products/2/2.jpg",
//           "https://i.dummyjson.com/data/products/2/3.jpg",
//         ],
//       },
//     ];

//     const result = await Product.insertMany(newProducts);
//     console.log("Documents saved successfully:", result);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// createDocuments();

// const updateManyDocuments = async (title, newPrice) => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Update all documents that match the condition
//     const updateResult = await Product.updateMany(
//       { title: title }, // The condition to match the documents
//       { $set: { price: newPrice } } // The update to apply
//     );

//     // Find and retrieve the updated documents
//     const updatedDocuments = await Product.find({ title: title });

//     if (updateResult.nModified === 0) {
//       console.log("No documents were updated.");
//     } else {
//       console.log("documents updated successfully.");
//       console.log("Updated documents:", updatedDocuments);
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// // Example usage: Update the price of all "iPhone 9" products and retrieve the updated documents
// updateManyDocuments("iPhone 9", 599.99);

// const deleteDocumentsByTitle = async (title) => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Delete all documents that match the condition
//     const deleteResult = await Product.deleteMany({ title: title });

//     if (deleteResult.deletedCount === 0) {
//       console.log("No documents matching the condition were found.");
//     } else {
//       console.log(deleteResult.deletedCount, "documents deleted successfully.");
//     }
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };

// // Example usage: Delete all documents with the title "iPhone 9"
// deleteDocumentsByTitle("iPhone 9");
