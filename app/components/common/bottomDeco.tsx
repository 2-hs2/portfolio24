import React from "react";

const BottomDeco = () => {
  return (
    <div className="w-full flex justify-between items-end opacity-40">
      <div className="flex flex-col font-notoSerifTibetan text-[1.125rem] mobile:text-[0.875rem]">
        <span>2024</span>
        <span>Portfolio.</span>
      </div>
      <div className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 duration-500 cursor-pointer">
        <span className="text-pretendard text-[1rem] mobile:text-[0.75rem]">
          LEE HYE SEUNG
        </span>
      </div>
      <div className="flex flex-col font-notoSerifTibetan italic text-[1rem] mobile:text-[0.75rem]">
        <span>{"<PORTFOLIO.>"}</span>
        <span>{"</PORTFOLIO.>"}</span>
      </div>
    </div>
  );
};

export default BottomDeco;
