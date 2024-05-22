import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FileWhereInput = {
  dateUploaded?: DateTimeNullableFilter;
  fileData?: JsonFilter;
  fileName?: StringNullableFilter;
  fileType?: "Option1";
  id?: StringFilter;
};
