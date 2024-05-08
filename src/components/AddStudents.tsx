"use client"
import {Button, DatePicker, Input, Select, SelectProps, Space} from "antd"
import {PlusIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {Controller, useForm} from "react-hook-form"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {
  arrToStr,
  customFetch,
  formatDate,
  generateRandomNumber,
} from "@/utils/utils"
import {toast} from "sonner"
import {RootState} from "@/lib/store"
import {useDispatch, useSelector} from "react-redux"
import {toggleAddStudentFunc} from "@/lib/features/toggleSlice"

type TInputs = {
  fullName: string
  birthday: string
  address: string
  group: string[]
  phone: string
}

async function addStudents(data: IStudents) {
  try {
    toast.loading("Please wait, the students is being generated")
    const res = await customFetch.post("students", data)
    toast.success("Students created successfully")
    toast.dismiss()
    return res.data
  } catch (error) {
    toast.error("Failed to create student")
    throw error
  } finally {
    toast.dismiss()
  }
}

function AddData({isOpen}: {isOpen: boolean}) {
  const {toggleAddStudentValue} = useSelector(
    (store: RootState) => store.dataSlice
  )
  const dispatch = useDispatch()

  const queryClient = useQueryClient()
  const {control, handleSubmit} = useForm<TInputs>()
  const options: SelectProps["options"] = [
    {
      label: "Kotlin",
      value: "Kotlin",
      emoji:
        "https://mathiasfrohlich.gallerycdn.vsassets.io/extensions/mathiasfrohlich/kotlin/1.7.1/1581441165235/Microsoft.VisualStudio.Services.Icons.Default",
      desc: "Kotlin",
    },
    {
      label: "Java",
      value: "Java",
      emoji: "https://www.svgrepo.com/show/303388/java-4-logo.svg",
      desc: "Java",
    },
    {
      label: "C++",
      value: "C++",
      emoji:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
      desc: "C++",
    },
    {
      label: "Python",
      value: "Python",
      emoji:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Python_logo_51.svg/1200px-Python_logo_51.svg.png",
      desc: "Python",
    },
  ]

  const {mutateAsync, isPending} = useMutation({
    mutationFn: addStudents,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
      dispatch(toggleAddStudentFunc())
    },
  })

  const onSubmit = (studentsFormData: TInputs) => {
    mutateAsync({
      id: generateRandomNumber(),
      fullName: studentsFormData.fullName,
      birthday: formatDate(studentsFormData.birthday),
      address: studentsFormData.address,
      group: arrToStr(studentsFormData.group),
      phone: studentsFormData.phone,
    })
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-40 transition-all duration-300 ${
        toggleAddStudentValue ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white z-50 w-full mx-80 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between">
          <p className="mb-5">Add new student</p>
          <button
            onClick={() => dispatch(toggleAddStudentFunc())}
            className="bg-slate-100 hover:bg-slate-200 transition-all rounded-full justify-center flex items-center w-8 h-8"
          >
            <XMarkIcon width={25} height={25} />
          </button>
        </div>
        <div className="flex w-full">
          <div className="border-dashed w-[500px] h-[400px] border border-black">
            <span className="flex h-full w-full items-center justify-center">
              SELECT IMAGE
            </span>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid mt-5 grid-cols-2 gap-3 h-min w-full ml-5"
          >
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Fullname:</h5>
              <Controller
                control={control}
                name="fullName"
                render={({field}) => (
                  <Input className="h-10" size="large" {...field} />
                )}
              />
            </div>
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Birthday:</h5>
              <Controller
                name="birthday"
                control={control}
                render={({field}) => (
                  <DatePicker
                    placeholder=""
                    className="w-full h-10"
                    {...field}
                    size="large"
                  />
                )}
              />
            </div>
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Address:</h5>
              <Controller
                name="address"
                control={control}
                render={({field}) => (
                  <Input {...field} className="h-10" size="large" />
                )}
              />
            </div>
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Group:</h5>
              <Controller
                name="group"
                control={control}
                render={({field}) => (
                  <Select
                    {...field}
                    size="large"
                    className="h-10 w-full"
                    mode="multiple"
                    options={options}
                    optionRender={(option) => (
                      <Space>
                        <span role="img" aria-label={option.data.label}>
                          <img
                            src={option.data.emoji}
                            alt=""
                            width={24}
                            height={24}
                          />
                        </span>
                        {option.data.desc}
                      </Space>
                    )}
                  />
                )}
              />
            </div>
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Phone number:</h5>
              <Controller
                name="phone"
                control={control}
                render={({field}) => (
                  <Input
                    {...field}
                    name="phone"
                    addonBefore="+998"
                    size="large"
                  />
                )}
              />
            </div>
            <div className="w-full items-end flex">
              <Button
                loading={isPending}
                htmlType="submit"
                type="primary"
                size="large"
                className="flex items-center"
                icon={<PlusIcon width={21} height={21} />}
              >
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AddData
