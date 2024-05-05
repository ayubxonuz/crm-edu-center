"use client"
import {Button, DatePicker, Input, Select, SelectProps, Space} from "antd"
import {UserOutlined} from "@ant-design/icons"
import {MapPinIcon, PlusIcon} from "@heroicons/react/24/outline"
import {Controller, useForm} from "react-hook-form"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {customFetch, formatDate} from "@/utils/utils"
import {toast} from "sonner"
const {Search} = Input

type TInputs = {
  id: number
  fullName: string
  birthday: string
  address: string
  group: string
  phone: string
}

async function addStudents(data: IStudents) {
  toast.loading("Please wait, the students is being generated")
  const res = await customFetch.post("students", data)
  toast.success("Students created successfully")
  toast.dismiss()
  return res.data
}

function AddData() {
  const queryClient = useQueryClient()
  const {control, handleSubmit} = useForm<TInputs>()
  const options: SelectProps["options"] = [
    {
      label: "Kotlin",
      value: "kotlin",
      emoji: "🇨🇳",
      desc: "China (中国)",
    },
  ]

  const {mutateAsync} = useMutation({
    mutationFn: addStudents,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
    },
  })

  const onSubmit = (studentsFormData: IStudents) => {
    mutateAsync({
      id: studentsFormData.id,
      fullName: studentsFormData.fullName,
      birthday: formatDate(studentsFormData.birthday),
      address: studentsFormData.address,
      group: studentsFormData.group,
      phone: studentsFormData.phone,
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center gap-x-4"
    >
      <h5 className="text-xl font-medium">Add students:</h5>
      <Controller
        control={control}
        name="fullName"
        render={({field}) => (
          <Input
            className="w-72"
            size="large"
            {...field}
            placeholder="Fullname"
            prefix={<UserOutlined />}
          />
        )}
      />
      <Controller
        name="birthday"
        control={control}
        render={({field}) => <DatePicker {...field} size="large" />}
      />
      <Controller
        name="address"
        control={control}
        render={({field}) => (
          <Input
            {...field}
            className="w-72"
            size="large"
            placeholder="Address"
            prefix={<MapPinIcon width={24} height={24} />}
          />
        )}
      />
      <Controller
        name="group"
        control={control}
        render={({field}) => (
          <Select
            {...field}
            size="large"
            mode="multiple"
            className="w-52 max-w-full"
            placeholder="select one country"
            options={options}
            optionRender={(option) => (
              <Space>
                <span role="img" aria-label={option.data.label}>
                  {option.data.emoji}
                </span>
                {option.data.desc}
              </Space>
            )}
          />
        )}
      />
      <Search
        name="phone"
        addonBefore="+998"
        size="large"
        placeholder="input search text"
        allowClear
        style={{width: 304}}
      />
      <Button
        htmlType="submit"
        type="primary"
        size="large"
        className="flex items-center"
        icon={<PlusIcon width={21} height={21} />}
      >
        SUBMIT
      </Button>
    </form>
  )
}
export default AddData
