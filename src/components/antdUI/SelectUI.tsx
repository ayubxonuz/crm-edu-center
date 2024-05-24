import {Select} from "antd"

type SelectType = {
  onChange: (value: string) => void
  onSearch?: (value: string) => void
  filterOption?: (
    input: string,
    option?: {
      label: string
      value: string
    }
  ) => boolean
  options: {
    value: string
    label: string
  }[]
}

function SelectUI({filterOption, onChange, onSearch, options}: SelectType) {
  return (
    <Select
      showSearch
      size="large"
      className="h-10 w-full"
      placeholder=""
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={options}
    />
  )
}
export default SelectUI
