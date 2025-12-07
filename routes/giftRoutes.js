import express from "express";
import { connectToDatabase } from "../models/db.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// "/" that serves /api/gifts
router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection("gifts").find().toArray();
    res.json(gifts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// "/:id" that serves /api/gifts/:id
router.get("/:id", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gift = await db
      .collection("gifts")
      .findOne({ _id: new ObjectId(req.params.id) });

    if (!gift) {
      return res.status(404).json({ message: "Gift not found" });
    }

    res.json(gift);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
