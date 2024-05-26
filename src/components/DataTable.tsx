import {Button, ConfigProvider, Space, Table, Tooltip} from "antd"
import {PencilSquareIcon, XMarkIcon} from "@heroicons/react/24/outline"
import {toggleEditStudentFunc} from "@/lib/features/toggle/toggleSlice"
import {useDispatch} from "react-redux"
import {setSingleStudentData} from "@/lib/features/student/studentSlice"
import ModalPromise from "./ModalPromise"

type TDataTable = {
  students: IStudents[]
  loading: boolean
}

function DataTable({loading, students}: TDataTable) {
  const dispatch = useDispatch()

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
      dataIndex: "personalPhone",
      key: "personalPhone",
    },
    {
      title: "Options",
      className: "w-[120px]",
      key: "options",
      render: (student: IStudents) => (
        <Space size="small">
          <ModalPromise
            key="students"
            title="student"
            url={`students/${student._id}`}
          >
            <Button
              type="primary"
              size="large"
              shape="default"
              danger
              icon={<XMarkIcon width={24} height={24} />}
            />
          </ModalPromise>
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
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: "",
        },
      }}
    >
      <Table
        scroll={{y: `calc(80vh - 250px)`}}
        bordered
        tableLayout="auto"
        rowKey="id"
        loading={loading}
        columns={studentsTableData}
        dataSource={students}
      />
    </ConfigProvider>
  )
}
export default DataTable
