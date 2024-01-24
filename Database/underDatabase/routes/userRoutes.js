import express from "express";
import users from "../model/roleschema.js"; 

const router = express.Router();

import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

// Route for user registration
router.post(
    "/register",
    [
      // Validate input fields
      body("name").notEmpty().withMessage("Name is required"),
      body("email").isEmail().withMessage("Invalid email format"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
      body("role") // Validate the 'role' field
        .isIn(["user", "admin"]) // Ensure the role is one of 'user' or 'admin'
        .withMessage("Invalid role"), // Provide an error message for an invalid role
    ],
    async (req, res) => {
      try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
  
        const { name, email, password, role } = req.body; // Collect role from the request body
  
        // Check if the email is already in use
        const existingUser = await users.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Email already registered" });
        }
  
        // Hash and salt the password
        const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
  
        // Create a new user with the hashed password and specified role
        const newUser = new users({
          name,
          email,
          password: hashedPassword,
          role, // Store the role from the request body
        });
  
        // Save the user to the database
        await newUser.save();
  
        res.status(201).json({ message: "User registered successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    }
  );