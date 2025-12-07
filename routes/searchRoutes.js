import express from "express";
import { connectToDatabase } from "../models/db.js";

const router = express.Router();

// example: /api/gifts/search?category=toys
router.get("/", async (req, res) => {
  try {
    const { category } = req.query; // read ?category=

    const db = await connectToDatabase();
    const gifts = await db
      .collection("gifts")
      .find({ category: category })   // ✅ filter on category
      .toArray();

    res.json(gifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
