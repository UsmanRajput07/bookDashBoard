import { TableHead, TableRow } from "@/components/ui/table";

export default function Header({ headers }: { headers: string[] }) {
  return (
    <TableRow>
      {headers.map((header) => (
        <TableHead key={header}>{header}</TableHead>
      ))}
    </TableRow>
  );
}
