import express from "express";
import User from "../models/Customer.js";

const router = express.Router();

// POST route to save user data
router.post("/", async (req, res) => {
  console.log("started!");
  try {
    const {
      name,
      email,
      company,
      //phoneNumber,
      services,
      newOrRebuild,
      websiteNeeds,
      budget,
    } = req.body;

    console.log("Working in body!");
    console.log(req.body);

    // Input validation (basic check)
    // if (!name || !email || !phoneNumber) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Name, email, and phone number are required fields.",
    //   });
    // }

    // Create a new user instance
    const user = new User({
      name,
      email,
      company,
      //phoneNumber,
      services,
      newOrRebuild,
      websiteNeeds,
      budget,
    });
    console.log("usrer created");

    // Save to database
    console.log("url", process.env.MONGODB_URI);
    console.log("user saving!!!");
    const savedUser = await user.save();
    console.log("user saved!");
    // Success response
    res.status(201).json({
      success: true,
      message: "User data saved successfully.",
      data: savedUser,
    });
  } catch (err) {
    console.error("🔥 Error saving user data:", err.message); // Log the error
    res.status(500).json({
      success: false,
      message: "Failed to save user data. Please try again later.",
      error: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

export default router;
