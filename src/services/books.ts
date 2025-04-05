import axiosWrapper from "@/helper/axios";

export function getBooks() {
    return axiosWrapper.get("/books");
}