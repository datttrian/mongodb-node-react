import express from "express";
import cors from "cors";
import { connectClient } from "./db";

const router = express.Router();
router.use(cors());
router.get("/contests", async (req, res) => {
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

router.get("/contests/:contestId", async (req, res) => {
  const client = await connectClient();
  // req.params.contestId
  console.log(req.params.contestId);
  const contests = await client
    .collection("contests")
    .findOne({ id: req.params.contestId });
  res.send({ contests });
});

export default router;
