import { InputJsonValue } from "../../types";

export type FileCreateInput = {
  dateUploaded?: Date | null;
  fileData?: InputJsonValue;
  fileName?: string | null;
  fileType?: "Option1" | null;
};
