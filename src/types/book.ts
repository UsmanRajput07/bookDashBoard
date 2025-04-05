
export interface Author {
    _id: string;
    name: string;
}
export interface Book {
 _id: string;
 title: string;
 author: Author;
 genre: string;
 file: string;
 coverImg: string;
 createdAt: string;
}