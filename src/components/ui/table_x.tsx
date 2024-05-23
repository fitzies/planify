import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TableXProps = {
  headers: string[];
  values: string[][];
  text?: string;
};

const TableX = ({ headers, values, text }: TableXProps) => {
  return (
    <>
      <Table>
        <TableCaption>{text}</TableCaption>
        <TableHeader>
          <TableRow className="border-zinc-800">
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          {values.map((value, index) => (
            <TableRow className="border-zinc-800" key={value[0]}>
              {value.map((cell) => (
                <TableCell key={cell}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableX;
