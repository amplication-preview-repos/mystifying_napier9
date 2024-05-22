export type Conversion = {
  conversionDate: Date | null;
  convertedFile: string | null;
  createdAt: Date;
  id: string;
  originalFile: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
