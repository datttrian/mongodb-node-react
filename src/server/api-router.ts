import express from "express";
import testData from "../test-data.json";

const router = express.Router();

router.get("/contests", (req, res) => {
  // get the data from MongoDB
  res.send(testData);
});

// router.get("/contests")

export default router;
