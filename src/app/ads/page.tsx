"use client"
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  FileTextOutlined,
} from "@ant-design/icons"
import {Card, Empty} from "antd"

import Header from "@/components/Header"
import Score from "@/components/Score"
import {useQuery} from "@tanstack/react-query"
import {customFetch} from "@/utils/utils"
import ModalPromise from "@/components/ModalPromise"
const {Meta} = Card

function Ads() {
  const {data: ads, isPending} = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      const ads: {data: IAds[]} = await customFetch("/ads")
      return ads.data
    },
  })

  return (
    <main className="grid gap-y-5">
      <Header buttonTwo={{text: "ADD ADS", click: () => 1}} text="ADS" />
      <div className="grid grid-cols-3 justify-self-start gap-5 mb-5">
        <Score title="All ads" total={ads?.length ?? 0} />
        <Score title="lorem" total={131} />
        <Score title="lorem" total={134} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-10">
        {ads?.map((ad) => (
          <Card
            key={ad._id}
            loading={isPending}
            className="w-[100%]"
            cover={<img className="h-[220px]" alt="ads photo" src={ad.image} />}
            actions={[
              <ModalPromise key="ads" title="ad" url={`ads/${ad._id}`}>
                <DeleteOutlined key="delete" />
              </ModalPromise>,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              className="flex items-center"
              avatar={<FileTextOutlined />}
              title={ad.title}
            />
          </Card>
        ))}

        {isPending &&
          Array.from({length: 4}).map((_, idx) => (
            <Card
              key={idx}
              loading={isPending}
              style={{width: 300}}
              actions={[
                <DeleteOutlined key="delete" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            ></Card>
          ))}
      </div>

      {ads?.length == 0 && <Empty />}
    </main>
  )
}
export default Ads
