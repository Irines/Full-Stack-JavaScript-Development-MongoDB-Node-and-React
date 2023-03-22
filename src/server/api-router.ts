import express from "express";
// import testData from "../test-data.json";
import cors from "cors";
import { connectClient } from "./db";

const router = express.Router();
router.use(cors());
router.use(express.json())

router.get("/contests", async (req, res) => {
  // get data from the MongoDB
  const client = await connectClient();
  const contests = await client
    .collection("contests")
    .find()
    .project({
      id: 1,
      categoryName: 1,
      contestName: 1,
      _id: 0,
    })
    .toArray();
  res.send({ contests });
});

router.get("/contest/:contestId", async (req, res) => {
  // get data from the MongoDB
  const client = await connectClient();
  const contest = await client.collection("contests").findOne({
    id: req.params.contestId,
  });
  res.send({ contest });
});

router.post("/contest/:contestId", async (req, res) => {
  // push new contest name to MongoDB
  const client = await connectClient();
  const { newNameValue } = req.body;
  const doc = await client
    .collection("contests")
    .findOneAndUpdate(
      { id: req.params.contestId },
      {
        $push: {
          names: {
            id: newNameValue.toLowerCase().replace(/\s/g, ""),
            name: newNameValue,
            timestamp: new Date(),
          },
        },
      },
      {
        returnDocument: "after"
      }
    );
  res.send({ updatedContest: doc.value });
});

router.post("/contests", async (req, res) => {
  // push new contest name to MongoDB
  const client = await connectClient();
  const { contestName, categoryName, description } = req.body;
  
  const newId = contestName.toLowerCase().replace(/\s/g, "");
  const doc = await client
    .collection("contests")
    .insertOne({
        id: newId,
        contestName,
        categoryName,
        description,
        names: []
  })

  const contest = await client
    .collection("contests")
    .findOne( {_id: doc.insertedId });
  res.send({ contest });
});

export default router;
