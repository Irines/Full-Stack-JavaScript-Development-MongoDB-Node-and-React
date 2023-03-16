import express from "express";
import testData from "../test-data.json";

const router = express.Router();

router.get("/contests", (req, res) => {
  // get data from the MongoDB
  res.send(testData);
});

export default router;
