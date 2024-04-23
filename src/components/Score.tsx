type Tscore = {
  title: string
  total: string
}

function Score({title, total}: Tscore) {
  return (
    <div className="border rounded-md bg-white w-80 p-4 grid gap-y-5">
      <div className="flex justify-between items-center">
        <p className="font-medium text-black opacity-80">{title}</p>
      </div>
      <p className="font-bold text-3xl">{total}</p>
    </div>
  )
}
export default Score
