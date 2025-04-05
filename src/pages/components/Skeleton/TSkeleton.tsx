import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function TSkeleton({
  headers,
  rows = 5,
}: {
  headers: string[];
  rows?: number;
}) {
  return (
    <>
      {Array.from({ length: rows }).map((_, idx) => (
        <TableRow key={idx}>
          {headers.map((header) => (
            <TableCell key={header}>
              <Skeleton className="h-10" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}

