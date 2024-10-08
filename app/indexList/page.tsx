"use client";

import { useState } from "react";
import Link from "next/link";

import { indexListData } from "../data/indexListData";

import BottomDeco from "../components/common/bottomDeco";
import { IndexBox } from "../components/indexList/indexBox";

const IndexPage = () => {
  const [isHover, setIsHover] = useState<number>(-1);

  return (
    <main
      className={`relative w-screen max-w-[120rem] h-[67.5rem] flex flex-col justify-between p-[6rem] text-black duration-300
      mobile:p-[3rem] mobile:min-h-[50.75rem] mobile:h-max
      ${isHover != -1 ? "bg-black" : "bg-white"}`}
    >
      <section
        className={`flex flex-col items-center leading-normal mobile:mb-[3rem] animate-fade1`}
      >
        <span className="font-notoSerifTibetan text-[2rem] mobile:text-[1rem]">
          Activities
        </span>
        <span className="font-libreBaskerville text-[3.125rem] mobile:text-[1.75rem]">
          {"<INDEX. />"}
        </span>
        <Link
          href="/"
          className="text-[1rem] hover:blur-sm mobile:text-[0.875rem]"
        >
          {"< Home"}
        </Link>
      </section>
      <section className="w-full overflow-x-auto mb-[3rem] mobile:overflow-visible scrollXCustom">
        <div className="w-max flex gap-[7rem] mobile:flex-col mobile:items-center mobile:gap-[4rem] mobile:w-full">
          {indexListData.map((data, index) => (
            <div
              key={index}
              onMouseOver={() => setIsHover(index)}
              onMouseLeave={() => setIsHover(-1)}
              className="animate-fade2"
            >
              <IndexBox data={data} index={index} isHover={isHover} />
            </div>
          ))}
        </div>
      </section>
      <BottomDeco dark />
    </main>
  );
};

export default IndexPage;
