import axiosWrapper from "@/helper/axios";

export function getBooks() {
    return axiosWrapper.get("/books");
}

export const createBook = async (data: FormData) =>
    axiosWrapper.post('/books', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });