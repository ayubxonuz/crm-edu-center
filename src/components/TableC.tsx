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
import {Fragment} from "react"

function TableC() {
  return (
    <Table className="w-[90%] mx-auto">
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
        <TableRow>
          {studentsData.map((student) => (
            <Fragment key={student.id}>
              <TableCell className="font-medium">{student.id}</TableCell>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>{student.birthday}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.group}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell className="max-w-min w-max">
                <ScorePopover />
              </TableCell>
            </Fragment>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  )
}
export default TableC
