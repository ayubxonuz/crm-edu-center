"use client"
import {Button, DatePicker, Input, Select, Space} from "antd"
import {PlusIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {Controller, useForm} from "react-hook-form"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {customFetch, generateRandomNumber, selectGroup} from "@/utils/utils"
import {toast} from "sonner"
import {useDispatch} from "react-redux"
import {toggleAddStudentFunc} from "@/lib/features/toggle/toggleSlice"
import dayjs from "dayjs"
import {ChangeEvent, useState} from "react"

async function addStudents(data: IStudents) {
  try {
    // toast.loading("Please wait, the students is being generated")
    const res = await customFetch.post("students", data)
    toast.success("Student created successfully")
    // toast.dismiss()
    return res.data
  } catch (error) {
    toast.error("Failed to create student")
    throw error
  } finally {
    toast.dismiss()
  }
}

function AddData({isOpen}: {isOpen: boolean}) {
  const dispatch = useDispatch()
  const [selectImage, setSelectImage] = useState<string | null>(null)

  console.log(selectImage)

  const queryClient = useQueryClient()
  const {control, handleSubmit} = useForm<TInputs>()

  const {mutateAsync, isPending} = useMutation({
    mutationFn: addStudents,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
      dispatch(toggleAddStudentFunc())
    },
  })

  const onSubmit = (studentsFormData: TInputs) => {
    mutateAsync({
      _id: "",
      id: generateRandomNumber(),
      fullName: studentsFormData.fullName,
      birthday: dayjs(studentsFormData.birthday).format("MMM D, YYYY"),
      address: studentsFormData.address,
      group: studentsFormData?.group?.toString(),
      phone: studentsFormData.phone ?? "",
      userPercentage: 13,
      userPhoto: selectImage ?? "",
      createdAt: new Date(),
    })
  }
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const file: File | undefined = event.target.files?.[0]
    if (file) {
      setSelectImage(URL.createObjectURL(file))
    }
  }

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-40 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
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
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full">
          <div className="w-[500px] h-[400px] grid gap-y-2">
            {selectImage ? (
              <img
                src={selectImage}
                alt="Selected File"
                className="h-[370px] rounded-lg w-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-[370px]">
                <label className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="`0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <Controller
                    name="userPhoto"
                    control={control}
                    render={({field}) => (
                      <input
                        {...field}
                        onChange={handleFileChange}
                        type="file"
                        className="hidden"
                        value={field.value || ""}
                      />
                    )}
                  />
                </label>
              </div>
            )}
            <Button
              onClick={() => setSelectImage(null)}
              disabled={selectImage ? false : true}
              type="primary"
              danger
            >
              DELETE PHOTO
            </Button>
          </div>
          <div className="grid mt-5 grid-cols-2 gap-3 h-min w-full ml-5">
            <div className="w-full">
              <h5 className="text-lg opacity-70 font-medium">Fullname:</h5>
              <Controller
                control={control}
                name="fullName"
                render={({field}) => (
                  <Input
                    className="h-10"
                    size="large"
                    {...field}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const capitalizedValue =
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                      field.onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: capitalizedValue,
                        },
                      })
                    }}
                  />
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
                  <Input
                    {...field}
                    className="h-10"
                    size="large"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const capitalizedValue =
                        e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                      field.onChange({
                        ...e,
                        target: {
                          ...e.target,
                          value: capitalizedValue,
                        },
                      })
                    }}
                  />
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
                    maxCount={1}
                    className="h-10 w-full"
                    mode="multiple"
                    options={selectGroup}
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
          </div>
        </form>
      </div>
    </div>
  )
}
export default AddData
