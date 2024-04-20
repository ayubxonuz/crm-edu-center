import {
  TableBody,
  Table,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import ScorePopover from "./ScorePopover"
import {studentsData} from "@/utils/utils"

function TableC() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow className="select-none">
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Birthday</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Group</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Options</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {studentsData.map((student) => (
          <TableRow key={student.id}>
            <TableCell className="font-medium">{student.id}</TableCell>
            <TableCell>{student.fullName}</TableCell>
            <TableCell>{student.birthday}</TableCell>
            <TableCell>{student.address}</TableCell>
            <TableCell>{student.group}</TableCell>
            <TableCell>{student.phone}</TableCell>
            <TableCell className="max-w-min w-max">
              <ScorePopover />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
export default TableC
