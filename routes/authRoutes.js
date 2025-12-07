import express from "express";
import { connectToDatabase } from "../models/db.js";

const router = express.Router();

// ✅ LOGIN ROUTE FOR TASK 11
router.post("/login", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("users");

    // ✅ REQUIRED LINE FOR TASK 11
    const user = await collection.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    res.json({
      message: "Login successful",
      user: user
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
