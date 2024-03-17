import React from "react";

interface BottomDecoProps {
  dark?: boolean;
}
const BottomDeco = ({ dark }: BottomDecoProps) => {
  return (
    <div
      className={`w-full flex justify-between items-end opacity-40 text-white
      ${dark && "!text-black"}`}
    >
      <div className="flex flex-col font-notoSerifTibetan text-[1.125rem] mobile:text-[0.875rem]">
        <span>2024</span>
        <span>Portfolio.</span>
      </div>

      <span className="text-pretendard text-[1rem] mobile:text-[0.75rem]">
        LEE HYE SEUNG
      </span>

      <div className="flex flex-col font-notoSerifTibetan italic text-[1rem] mobile:text-[0.75rem]">
        <span>{"<PORTFOLIO.>"}</span>
        <span>{"</PORTFOLIO.>"}</span>
      </div>
    </div>
  );
};

export default BottomDeco;
