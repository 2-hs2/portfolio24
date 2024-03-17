"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DetailSection2Props {
  imgSrc: string;
  title: string[];
  link?: string;
}

const DetailSection2 = ({ data }: { data: DetailSection2Props[] }) => {
  const [isHover, setIsHover] = useState<number>(-1);

  return (
    <section className="h-max flex justify-center items-center py-[7rem] bg-black text-white leading-normal mobile:h-[50.75rem] laptop:py-[5rem] mobile:py-[3rem]">
      <div className="flex gap-2 flex-wrap w-[73rem] h-[29rem] overflow-y-auto mobile:w-[18.75rem] mobile:h-[38rem] laptop:w-[40.5rem] laptop:h-[31rem]">
        {data.map((item, index) => (
          <div
            onMouseOver={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(-1)}
            key={index}
            className={`relative w-[24rem] h-[14rem] bg-white mobile:w-[18.75rem] mobile:h-[9rem] laptop:w-[20rem] laptop:h-[10rem] ${
              item.link && "hover:opacity-60 duration-300"
            }`}
          >
            {item.link ? (
              <Link href={item.link} target="_blank">
                <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black/[0.5]">
                  <Image
                    src="/svgs/whiteArrow.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="absolute bottom-[1rem] right-[2rem] rotate-[45deg] mobile:w-[1rem] mobile:h-[1rem] mobile:right-4"
                  />
                  <div className="absolute bottom-4 left-8 flex flex-col font-pretendard text-[1rem] text-white mobile:text-[0.875rem] mobile:bottom-2 mobile:left-4">
                    {item.title.map((t, index) => (
                      <span key={index}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ) : (
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black/[0.5]">
                <div className="absolute bottom-4 left-8 flex flex-col font-pretendard text-[1rem] text-white mobile:text-[0.875rem] mobile:bottom-2 mobile:left-4">
                  {item.title.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </div>
              </div>
            )}
            <Image
              src={`/imgs/${item.imgSrc}`}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailSection2;
