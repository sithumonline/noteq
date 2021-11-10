import { noteData } from "./note.types";

export type ApiRes = {
  data?: string | noteData[] | noteData;
  errors?: string;
};
