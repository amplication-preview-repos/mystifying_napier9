import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConversionWhereInput = {
  conversionDate?: DateTimeNullableFilter;
  convertedFile?: StringNullableFilter;
  id?: StringFilter;
  originalFile?: StringNullableFilter;
  status?: "Option1";
};
