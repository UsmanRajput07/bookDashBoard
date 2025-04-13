import { z } from "zod";
export const BookformSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters" })
    .max(30, { message: "Title must be at most 30 characters" }),
  genre: z
    .string()
    .min(2, { message: "Genre must be at least 2 characters" })
    .max(20, { message: "Genre must be at most 20 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters" })
    .max(100, { message: "Description must be at most 100 characters" }),
  coverImage: z.instanceof(FileList).refine((file) => {
    return file.length == 1;
  }, "Cover Image is required"),
  file: z.instanceof(FileList).refine((file) => {
    return file.length == 1;
  }, "Book PDF is required"),
});
