import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/database";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    const { _id } = req.body;

    if (!_id) {
      res.status(400).json({ error: "Missing type id" });

      return;
    }

    const db = await connectToDatabase();

    const response = await db.collection("chapter").updateMany(
      { id_serie: _id },
      {
        $set: { status: true },
      }
    );

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
