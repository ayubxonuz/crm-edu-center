type Tscore = {
  title: string
  total: number
}

function Score({title, total}: Tscore) {
  return (
    <div className="border rounded-md border-[#0F4C75] bg-[#BBE1FA] w-[300px] p-4 grid gap-y-5">
      <div className="flex justify-between items-center">
        <p className="font-medium text-[#1B262C]">{title}</p>
      </div>
      <p className="font-bold text-3xl text-[#0F4C75]">{total}</p>
    </div>
  )
}
export default Score
