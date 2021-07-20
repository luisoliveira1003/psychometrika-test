import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/database";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    const { nameFront } = req.body;

    if (!nameFront) {
      res.status(400).json({ error: "Missing Name Front" });

      return;
    }

    const db = await connectToDatabase();

    const response = await db.collection("test").insertOne({
      nameFront,
      createdAt: new Date(),
    });

    res.status(200).json(response);
  } else if (req.method === "GET") {
    const db = await connectToDatabase();

    const id = "60f3535c9684ea8e14cdb418";

    let _id: ObjectId;

    _id = new ObjectId(id);

    const response = await db
      .collection("test")
      .findOne({ _id });

    if (!response) {
      res.status(400).json({ error: "Request body not found" });
    }

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
