import Score from "@/components/Score"

function Lessons() {
  return (
    <div className="flex gap-x-5">
      <Score title="All Students" total="1,232" />
      <Score title="Girls" total="312" />
      <Score title="Boys" total="941" />
    </div>
  )
}
export default Lessons
