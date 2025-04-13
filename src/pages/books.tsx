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
import TSkeleton from "./components/Skeleton/TSkeleton";
import NotFound from "./components/NotFound";

export default function Books() {
  const header = ["Title", "Genra", "Author", "Crrated At"];
  const { data, isLoading, isError } = useQuery({
    queryKey: ["books"],
    queryFn: () => getBooks(),
    staleTime: 10000,  // 10 seconds
  });
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md min-h-96">
      <h1 className="text-2xl font-bold">Books</h1>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <Header headers={header} />
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TSkeleton headers={header} rows={5} />
          ) : !isLoading && data?.data?.length === 0 ? (
            <NotFound addBook={false} />
          ) : isError ? (
            <p>Something went wrong</p>
          ) : (
            data?.data?.map((book: Book, idx: number) => {
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
                  <TableCell>
                    {dayjs(book.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
