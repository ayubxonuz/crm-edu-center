import React from "react"
import {Button, Space, Table, Tooltip} from "antd"
import {PencilSquareIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {customFetch} from "@/utils/utils"
import {useMutation, useQueryClient} from "@tanstack/react-query"

type TDataTable = {
  students: IStudents[]
  loading: boolean
}

const deleteStudent = async (id: number) => {
  const res = await customFetch.delete(`students/${id}`)
  return res.data
}

function DataTable({loading, students}: TDataTable) {
  const studentsTableData = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
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
      render: (name: IStudents) => (
        <Space size="small">
          <Tooltip title="Delete">
            <Button
              onClick={() => {
                mutateAsync(name.id)
              }}
              type="primary"
              size="large"
              shape="default"
              danger
              icon={<XMarkIcon width={24} height={24} />}
            />
          </Tooltip>
          <Tooltip title="Edit">
            <Button
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

  const {mutateAsync, isPending} = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
    },
  })
  return (
    <Table
      bordered
      loading={loading || isPending}
      columns={studentsTableData}
      dataSource={students}
    />
  )
}
export default DataTable
