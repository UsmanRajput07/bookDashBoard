import axiosWrapper from "@/helper/axios";

export function getBooks() {
  return axiosWrapper.get("/books");
}

export const createBook = async (data: FormData) => {
  return axiosWrapper.post("/books/create", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
