import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/database";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    const { _id, status } = req.body;

    if (!_id) {
      res.status(400).json({ error: "Missing type id" });

      return;
    }

    let id: ObjectId;

    id = new ObjectId(_id);

    const db = await connectToDatabase();

    const response = await db.collection("chapter").updateOne(
      { _id: id },
      {
        $set: { status: status },
        $currentDate: { lastModified: true }
      }
    );

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
