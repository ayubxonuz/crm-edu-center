import {formatPhoneNumber} from "@/utils/utils"
import {Input} from "antd"
import {Control, Controller} from "react-hook-form"

type PhoneInputType = {
  controlName: keyof TInputs
  label: string
  control: Control<TInputs, any>
}

function PhoneInput({control, controlName, label}: PhoneInputType) {
  return (
    <>
      <h5 className="text-lg opacity-70 font-medium">{label} raqam:</h5>
      <Controller
        name={controlName}
        control={control}
        render={({field}) => (
          <Input
            {...field}
            name="phone"
            addonBefore="+998"
            size="large"
            onChange={(e) => {
              const formattedValue = formatPhoneNumber(e.target.value)
              field.onChange(formattedValue)
            }}
          />
        )}
      />
    </>
  )
}
export default PhoneInput
