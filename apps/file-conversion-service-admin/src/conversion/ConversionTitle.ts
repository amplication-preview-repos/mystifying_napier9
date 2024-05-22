import { Conversion as TConversion } from "../api/conversion/Conversion";

export const CONVERSION_TITLE_FIELD = "convertedFile";

export const ConversionTitle = (record: TConversion): string => {
  return record.convertedFile?.toString() || String(record.id);
};
