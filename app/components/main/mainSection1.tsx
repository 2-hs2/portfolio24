import Image from "next/image";
import Link from "next/link";

const MainSection1 = ({ onSeciont2Click }: { onSeciont2Click: () => void }) => {
  return (
    <section className="h-[67.5rem] flex flex-col justify-between items-center p-[4rem] leading-normal mobile:h-[50.75rem] mobile:p-[2rem]">
      <div className="w-full flex justify-end">
        <Link href="/indexList" className="animate-fade2">
          <Image
            src="/svgs/whiteArrow.svg"
            alt=""
            width={120}
            height={120}
            className="hover:opacity-50 duration-500 cursor-pointer mobile:w-[3.125rem] mobile:h-[3.125rems] laptop:w-[5rem] laptop:h-[5rem]"
          />
        </Link>
      </div>
      <div className="flex flex-col text-[5.25rem] font-libreBaskerville italic mb-[5rem] laptop:text-[4.063rem] mobile:text-[1.8rem] animate-fade1">
        <span>{"<PORTFOLIO.>"}</span>
        <div className="flex items-start">
          <span>{"</PORTFOLIO.>"}</span>
          <span className="text-notoSerifTibetan text-[1.5rem] laptop:text-[1.375rem] mobile:text-[0.75rem]">
            2024
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between items-end animate-fade3">
        <div className="flex flex-col font-notoSerifTibetan text-[1.75rem] mobile:text-[1rem]">
          <span>2024</span>
          <span>Portfolio.</span>
        </div>
        <div
          onClick={() => onSeciont2Click()}
          className="flex flex-col items-center gap-1 opacity-50 hover:opacity-100 duration-500 cursor-pointer"
        >
          <span className="text-pretendard text-[1.125rem] mobile:text-[0.875rem]">
            About Me
          </span>
          <Image
            src="/svgs/arrowCircle.svg"
            alt=""
            width={45}
            height={45}
            className="mobile:h-[1.5rem] mobile:w-[1.5rem] mb-1"
          />
        </div>
        <div className="flex flex-col font-notoSerifTibetan italic text-[1.5rem] mobile:text-[0.875rem]">
          <span>{"<PORTFOLIO.>"}</span>
          <span>{"</PORTFOLIO.>"}</span>
        </div>
      </div>
    </section>
  );
};

export default MainSection1;
