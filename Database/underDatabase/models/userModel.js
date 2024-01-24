import mongoose from "mongoose";
import electronics from "./userSchema.js"; //collection
import connectDB from "../connections/db.js"; //connection

// const createDocument = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

    // const newItem = new electronics({
    //   id: 37,
    //   title: "smartPhone 99",
    //   description: "A smartphone mobile which is in ground",
    //   price: 57990,
    //   discountPercentage: 78.96,
    //   rating: 7.69,
    //   stock: 98,
    //   brand: "Kite",
    //   category: "smartphones",
    //   thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //   images: [
    //     "https://i.dummyjson.com/data/products/1/1.jpg",
    //     "https://i.dummyjson.com/data/products/1/2.jpg",
    //     "https://i.dummyjson.com/data/products/1/3.jpg",
    //     "https://i.dummyjson.com/data/products/1/4.jpg",
    //     "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //   ],
    // });

//     const result = await newItem.save();
//     console.log("Document saved successfully:", result);
//   } catch (error) {
//     console.error("Error occurred:", error);
//   } finally {
//     // Close the database connection
//     mongoose.connection.close();
//   }
// };
// createDocument();

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

// Call the getProducts function to retrieve and log the Products
// getProducts();

// const calculateAverageDiscountPercentageByBrand = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     // Use the aggregation framework to calculate the average discount percentage by brand
//     const result = await electronics.aggregate([
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

// // // Call the calculateAverageDiscountPercentageByBrand function to calculate and log the results
// calculateAverageDiscountPercentageByBrand();

// const createDocuments = async () => {
//   try {
//     // Connect to the database
//     await connectDB();

//     const newProducts = [
//       {
//         id: 38,
//         title: "iPhone 99",
//         description: "An apple mobile which is in space",
//         price: 84990,
//         discountPercentage: 88.96,
//         rating: 9.69,
//         stock: 9,
//         brand: "Apple",
//         category: "smartphones",
//         thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//         images: [
//           "https://i.dummyjson.com/data/products/1/1.jpg",
//           "https://i.dummyjson.com/data/products/1/2.jpg",
//           "https://i.dummyjson.com/data/products/1/3.jpg",
//           "https://i.dummyjson.com/data/products/1/4.jpg",
//           "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
//         ],
//       },

//       {
//         id: 39,
//         title: "Samsung Galaxy S22",
//         description: "A flagship smartphone from Samsung",
//         price: 79999,
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

//     const result = await electronics.insertMany(newProducts);
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
//     const updateResult = await electronics.updateMany(
//       { title: title }, // The condition to match the documents
//       { $set: { price: newPrice } } // The update to apply
//     );

//     // Find and retrieve the updated documents
//     const updatedDocuments = await electronics.find({ title: title });

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

// Example usage: Update the price of all "iPhone 9" products and retrieve the updated documents
// updateManyDocuments("iPhone 99", 599.99);

const deleteDocumentsByTitle = async (title) => {
  try {
    // Connect to the database
    await connectDB();

    // Delete all documents that match the condition
    const deleteResult = await electronics.deleteMany({ title: title });

    if (deleteResult.deletedCount === 0) {
      console.log("No documents matching the condition were found.");
    } else {
      console.log(deleteResult.deletedCount, "documents deleted successfully.");
    }
  } catch (error) {
    console.error("Error occurred:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

// Example usage: Delete all documents with the title "iPhone 9"
deleteDocumentsByTitle("iPhone 99");