import MTInput from "./MTInput"
import MTSelect from "./MTSelect"

function AddData() {
  return (
    <div className="flex gap-x-3">
      <MTInput label="FullName" />
      <input className="border-[2px] rounded-lg" type="date" />
      <MTInput label="Address" />
      <MTSelect />
    </div>
  )
}
export default AddData
