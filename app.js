import express from "express";
import giftRoutes from "./routes/giftRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

const app = express();

app.use(express.json());

// simple test route
app.get("/", (req, res) => {
  res.send("GiftLink backend is running");
});

// gifts routes
app.use("/api/gifts", giftRoutes);

// ✅ THIS IS THE IMPORTANT LINE FOR TASK 7
app.use("/api/gifts/search", searchRoutes);

export default app;
