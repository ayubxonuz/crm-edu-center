import {customFetch} from "@/utils/utils"
import {XMarkIcon} from "@heroicons/react/24/outline"
import {useMutation, useQueryClient} from "@tanstack/react-query"
import {Button, Tooltip, Modal} from "antd"
import {ExclamationCircleFilled} from "@ant-design/icons"
import {toast} from "sonner"

const {confirm} = Modal

const ModalPromise = ({id}: {id: string}) => {
  const queryClient = useQueryClient()

  const deleteStudent = async (studentId: string) => {
    const res = await customFetch.delete(`students/${studentId}`)
    return res.data
  }

  const {mutateAsync} = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["students"]})
    },
  })

  const showPromiseConfirm = (studentId: string) => {
    confirm({
      title: "Do you want to delete this student?",
      icon: <ExclamationCircleFilled />,
      content: "If you delete this, it cannot be recovered!",
      onOk() {
        return new Promise<void>((resolve, reject) => {
          mutateAsync(studentId)
            .then(() => {
              resolve()
              toast.success("Student successfully deleted")
            })
            .catch((error: any) => {
              reject(error)
              toast.error("Error deleting student: " + error.message)
            })
        })
      },
      onCancel() {},
    })
  }

  return (
    <Tooltip title="Delete">
      <Button
        onClick={() => showPromiseConfirm(id)}
        type="primary"
        size="large"
        shape="default"
        danger
        icon={<XMarkIcon width={24} height={24} />}
      />
    </Tooltip>
  )
}

export default ModalPromise
