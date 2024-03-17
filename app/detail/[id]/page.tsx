"use client";

import { usePathname } from "next/navigation";

import DetailSection1 from "@/app/components/detail/detailSection1";
import DetailSection2 from "@/app/components/detail/detailSection2";
import { detailSection1Data } from "@/app/data/detailSection1Data";
import { detailSection2Data } from "@/app/data/detailSection2Data";

const DetailPage = () => {
  const pathname = usePathname();
  const dataIndex = parseInt(pathname.split("/")[2]);

  return (
    <main className="text-black bg-white w-screen max-w-[120rem]">
      <DetailSection1
        data={detailSection1Data[dataIndex - 1]}
        index={dataIndex}
      />
      <DetailSection2 data={detailSection2Data[dataIndex - 1]} />
    </main>
  );
};

export default DetailPage;
