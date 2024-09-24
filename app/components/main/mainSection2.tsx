"use client";

import Image from "next/image";
import { ChangeEvent, RefObject, useCallback, useState } from "react";

import BottomDeco from "../common/bottomDeco";

const MainSection2 = ({
  section2Ref,
}: {
  section2Ref: RefObject<HTMLDivElement>;
}) => {
  const [inputValue, setInputValue] = useState<string>("Hello!");
  const onChangeInputVal = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  const [onClickArrowBtn, setClickArrowBtn] = useState<boolean>(false);

  const [selectedMenu, setSelectedMenu] = useState<number>(0);

  const frontList1 = [
    "HTML",
    "CSS",
    "Javascript",
    "JQuery",
    "React",
    "ReactNative",
    "Typescript",
  ];
  const frontList2 = [
    "Next.js",
    "Redux",
    "Zustand",
    "Turbo",
    "SCSS",
    "TailwindCSS",
    "SytledComponent",
  ];

  const designList = ["Illustrator", "Photoshop", "Xd", "Figma"];

  return (
    <section
      ref={section2Ref}
      className="h-[67.5rem] flex flex-col justify-center items-center gap-3 p-[4rem] bg-white/10 leading-normal mobile:h-[50.75rem] mobile:p-[2rem]"
    >
      {onClickArrowBtn ? (
        <div className="w-full h-full flex flex-col justify-between animate-fade1">
          <div className="flex flex-col items-center leading-normal">
            <span className="font-notoSerifTibetan text-[2rem] mobile:text-[1rem]">
              ABOUT
            </span>
            <span className="font-libreBaskerville text-[3.125rem] mobile:text-[1.75rem] mb-[3rem]">
              {"<ME. />"}
            </span>
            <div className="flex gap-[5rem] font-notoSerifTibetan text-[1.5rem] mobile:text-[1rem]">
              <button
                onClick={() => setSelectedMenu(0)}
                className={`${
                  selectedMenu == 0 ? "opacity-80" : "opacity-50"
                } duration-300 hover:opacity-100`}
              >
                {"{INTRODUCTION}"}
              </button>
              <button
                onClick={() => setSelectedMenu(1)}
                className={`${
                  selectedMenu == 1 ? "opacity-80" : "opacity-50"
                } duration-300 hover:opacity-100`}
              >
                {"{SKILLS}"}
              </button>
            </div>
          </div>
          {selectedMenu == 0 ? (
            <div className="flex flex-col items-center gap-[4rem] mb-[8rem] font-pretendard text-[1.25rem] mobile:mb-4 mobile:text-[0.875rem] laptop:mb-0 animate-fade1">
              <div className="flex flex-col items-center gap-1">
                <span className="opacity-70">
                  디자인이라는 차별화된 능력을 갖춘
                </span>
                <span className="opacity-70">
                  창의적이고 감각적인 프론트엔드 개발자,
                </span>
                <span className="text-[1.5rem] italic mobile:text-[1.125rem]">{`{'이혜승'}입니다.`}</span>
              </div>
              <div className="flex gap-8 text-[1.125rem] mobile:flex-col mobile:items-center mobile:text-[0.875rem] laptop:flex-col laptop:items-center">
                <div className="flex flex-col mobile:items-center laptop:items-center">
                  <span className="font-notoSerifTibetan text-[1.5rem] italic mb-2 mobile:mb-0 mobile:text-[1.125rem]">
                    {"<Education. />"}
                  </span>
                  <span className="opacity-70">
                    아주대학교 디지털미디어 전공 (19 - 24)
                  </span>
                  <span className="opacity-70">
                    아주대학교 소프트웨어 복수전공 (20 - 24)
                  </span>
                </div>
                <div className="flex flex-col mobile:items-center laptop:items-center">
                  <span className="font-notoSerifTibetan text-[1.5rem] italic mb-2 mobile:mb-0 mobile:text-[1.125rem]">
                    {"<Work Experience. />"}
                  </span>
                  <span className="opacity-70">
                    래브라도랩스 프론트팀 인턴 (23.01 - 23.04)
                  </span>
                  <span className="opacity-70">
                    플리트소프트 프론트팀 인턴 (24.01 - 24.06)
                  </span>
                </div>
                <div className="flex flex-col mobile:items-center laptop:items-center">
                  <span className="font-notoSerifTibetan text-[1.5rem] italic mb-2 mobile:mb-0 mobile:text-[1.125rem]">
                    {"<Contact. />"}
                  </span>
                  <span className="opacity-70">e-mail : wjoo3@naver.com</span>
                  <span className="opacity-70">phone : 010-4085-8238</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center gap-[5rem] mb-[10rem] mobile:flex-col mobile:items-center  mobile:mb-0 mobile:gap-[3rem] animate-fade1">
              <div className="flex flex-col mobile:items-center">
                <span className="font-notoSerifTibetan text-[1.5rem] italic mb-5 mobile:mb-0 mobile:text-[1.125rem]">
                  {"<FrontEnd. />"}
                </span>
                <div className="flex gap-[3rem]">
                  <span className="opacity-70 flex flex-col gap-1 mobile:items-center">
                    {frontList1.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </span>
                  <span className="opacity-70 flex flex-col gap-1 mobile:items-center">
                    {frontList2.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </span>
                </div>
              </div>
              <div className="flex flex-col mobile:items-center laptop:items-center">
                <span className="font-notoSerifTibetan text-[1.5rem] italic mb-5 mobile:mb-0 mobile:text-[1.125rem]">
                  {"<Design. />"}
                </span>
                <span className="opacity-70 flex flex-col gap-1">
                  {designList.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
              </div>
            </div>
          )}
          <BottomDeco />
        </div>
      ) : (
        <>
          <span className="font-notoSerifTibetan text-[1.75rem] laptop:text-[1.5rem] mobile:text-[1.125rem]">
            <span className="font-libreBaskerville">{"<span> "}</span>
            {`Enter "Hello!"`}
            <span className="font-libreBaskerville">{" </span>"}</span>
          </span>
          <label className="w-[25rem] flex gap-4 px-5 py-2 bg-white/5 rounded-full border border-white text-white/70 font-pretendard text-[1.25rem] mobile:w-[16rem] mobile:text-[1rem] laptop:w-[22rem]">
            <input
              value={inputValue}
              onChange={onChangeInputVal}
              className="w-full focus-visible:outline-none bg-transparent"
            />
            <button
              onClick={() => {
                if (inputValue === "Hello!") setClickArrowBtn(true);
              }}
            >
              <Image
                src="/svgs/whiteArrowSm.svg"
                alt=""
                width={20}
                height={20}
              />
            </button>
          </label>
          {inputValue !== "Hello!" && (
            <span className="font-notoSerifTibetan opacity-40 text-[1rem] mobile:text-[0.75rem]">{`"Hello!"를 입력해주세요.`}</span>
          )}
        </>
      )}
    </section>
  );
};

export default MainSection2;
