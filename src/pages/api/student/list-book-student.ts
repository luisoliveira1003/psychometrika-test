import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/database";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "GET") {
    const db = await connectToDatabase();

    const id = "60f48bebeb38d8e5caa9e79e";

    let _id: ObjectId;

    _id = new ObjectId(id);

    let serieAndChapters: Object;

    const serie = await db.collection("serie").findOne({ _id: _id });

    const chapter = await db
      .collection("chapter")
      .find({ status: true })
      .toArray();

    serieAndChapters = { serie: serie, chapter: chapter };

    if (!serieAndChapters) {
      res.status(400).json({ error: "Request body not found" });
    }

    res.status(200).json(serieAndChapters);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
