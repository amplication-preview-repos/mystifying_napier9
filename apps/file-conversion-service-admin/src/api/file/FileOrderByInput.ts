import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  dateUploaded?: SortOrder;
  fileData?: SortOrder;
  fileName?: SortOrder;
  fileType?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
