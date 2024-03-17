"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

import DetailSection1 from "@/app/components/detail/detailSection1";
import DetailSection2 from "@/app/components/detail/detailSection2";
import { detailSection1Data } from "@/app/data/detailSection1Data";
import { detailSection2Data } from "@/app/data/detailSection2Data";

const DetailPage = () => {
  const pathname = usePathname();
  const dataIndex = parseInt(pathname.split("/")[2]);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="text-black bg-white w-screen max-w-[120rem]">
      <DetailSection1
        data={detailSection1Data[dataIndex - 1]}
        index={dataIndex}
      />
      <DetailSection2 data={detailSection2Data[dataIndex - 1]} />
      <button
        onClick={MoveToTop}
        className="fixed bottom-8 right-8 opacity-50 rotate-180 hover:opacity-90 duration-200 mobile:w-[1.5rem] mobile:h-[1.5rem]"
      >
        <Image src="/svgs/arrowCircle.svg" alt="" width={30} height={30} />
      </button>
    </main>
  );
};

export default DetailPage;
