import React from "react"
import {Button, Modal, Space, Table, Tooltip} from "antd"
import {PencilSquareIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {customFetch} from "@/utils/utils"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {ExclamationCircleFilled} from "@ant-design/icons"
import {toast} from "sonner"
import {toggleEditStudentFunc} from "@/lib/features/toggle/toggleSlice"
import {useDispatch} from "react-redux"
import {setSingleStudentData} from "@/lib/features/student/studentSlice"
const {confirm} = Modal

type TDataTable = {
  students: IStudents[]
  loading: boolean
}

const deleteStudent = async (id: number) => {
  const res = await customFetch.delete(`students/${id}`)
  return res.data
}

function DataTable({loading, students}: TDataTable) {
  const dispatch = useDispatch()
  const showPromiseConfirm = (id: number) => {
    confirm({
      title: "Do you want to delete this student?",
      icon: <ExclamationCircleFilled />,
      content: "If you delete this, it cannot be recovered!",
      onOk() {
        return new Promise<void>((innerResolve, innerReject) => {
          mutateAsync(id)
            .then(() => {
              innerResolve()
              toast.success("Student successfully deleted")
            })
            .catch((error: any) => {
              innerReject(error)
              toast.error(error)
            })
        })
      },
      onCancel() {},
    })
  }

  const studentsTableData = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      className: "w-[65px]",
    },
    {
      title: "FullName",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Options",
      className: "w-[120px]",
      key: "options",
      render: (student: IStudents) => (
        <Space size="small">
          <Tooltip title="Delete">
            <Button
              onClick={() => showPromiseConfirm(student.id)}
              type="primary"
              size="large"
              shape="default"
              danger
              icon={<XMarkIcon width={24} height={24} />}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
              onClick={() => {
                dispatch(toggleEditStudentFunc())
                dispatch(setSingleStudentData(student))
              }}
              size="large"
              type="primary"
              shape="default"
              icon={<PencilSquareIcon width={24} height={24} />}
            />
          </Tooltip>
        </Space>
      ),
    },
  ]
  const queryClient = useQueryClient()

  const {mutateAsync} = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
    },
  })
  return (
    <Table
      scroll={{y: `calc(80vh - 250px)`}}
      bordered
      tableLayout="auto"
      rowKey="id"
      loading={loading}
      columns={studentsTableData}
      dataSource={students}
    />
  )
}
export default DataTable
