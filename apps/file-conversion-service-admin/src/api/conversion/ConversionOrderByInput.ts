import { SortOrder } from "../../util/SortOrder";

export type ConversionOrderByInput = {
  conversionDate?: SortOrder;
  convertedFile?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  originalFile?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
