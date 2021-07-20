import { Document, ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../utils/database";
import { IBookProps, IErrorResponseType } from "../../../utils/types";

export default async (
  req: NextApiRequest,
  res: NextApiResponse<IErrorResponseType | IBookProps | Document>
): Promise<void> => {
  if (req.method === "POST") {
    const db = await connectToDatabase();

    const response = await db.collection("chapter").insertMany([
      {
        sequence: "1",
        id_serie: "60f48bebeb38d8e5caa9e79e",
        name: "Conjuntos",
        status: true,
        html: "",
        createdAt: new Date(),
      },
      {
        sequence: "2",
        id_serie: "60f48bebeb38d8e5caa9e79e",
        name: "Conjuntos numéricos",
        status: true,
        html: "",
        createdAt: new Date(),
      },
      {
        sequence: "3",
        id_serie: "60f48bebeb38d8e5caa9e79e",
        name: "Relações e introdução à funções",
        status: true,
        html: "",
        createdAt: new Date(),
      },
      {
        sequence: "4",
        id_serie: "60f48bebeb38d8e5caa9e79e",
        name: "Função constante e função afim",
        status: true,
        html: "",
        createdAt: new Date(),
      },
      {
        sequence: "5",
        id_serie: "60f48bebeb38d8e5caa9e79e",
        name: "Função quadrática ou função polinomial do 2º grau",
        status: true,
        html: "",
        createdAt: new Date(),
      },
    ]);

    res.status(200).json(response);
  } else {
    res.status(400).json({ error: "Wrong request method" });
  }
};
