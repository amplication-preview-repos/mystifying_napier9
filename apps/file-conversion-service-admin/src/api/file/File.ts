import { JsonValue } from "type-fest";

export type File = {
  createdAt: Date;
  dateUploaded: Date | null;
  fileData: JsonValue;
  fileName: string | null;
  fileType?: "Option1" | null;
  id: string;
  updatedAt: Date;
};
