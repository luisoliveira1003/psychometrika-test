import { ObjectId } from "mongodb";

export interface IErrorResponseType {
  error: string;
}

export interface ISerieProps {
  _id: string;
  name: string;
  createdAt: string;
}

export interface IChapterProps {
  sequence: string;
  id_serie: ObjectId;
  name: string;
  status: boolean;
  html: string;
  createdAt: Date;
}

export interface IChapterUnique {
  chapter: IChapterProps;
}

export interface IBookProps {
  data: { serie: ISerieProps; chapter: IChapterProps[] };
}

export interface IToggleProps {
  _id: string;
  status: boolean;
}
