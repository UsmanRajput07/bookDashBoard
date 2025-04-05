

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Header from "./components/tableLayout/Header";
import { useQuery } from "@tanstack/react-query";
import { getBooks } from "@/services/books";
import { Book } from "@/types/book";
import dayjs from "dayjs";

export default function Books() {
  const header = ["Title", "Genra", "Author", "Creted At"];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
  });
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md h-96">
      <h1 className="text-2xl font-bold">Books</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <Header headers={header} />
        </TableHeader>
        <TableBody>
          {data?.data?.map((book: Book, idx: number) => {
            return (
              <TableRow key={idx}>
                <TableCell className="font-medium flex gap-4 items-center">
                  <img
                    src={book?.coverImg}
                    className="aspect-square rounded-md object-cover w-15 h-15"
                    alt="book img"
                  />
                  {book.title}
                </TableCell>
                <TableCell>{book.genre}</TableCell>
                <TableCell>{book.author.name}</TableCell>
                <TableCell>{dayjs(book.createdAt).format("DD/MM/YYYY")}</TableCell> 
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
