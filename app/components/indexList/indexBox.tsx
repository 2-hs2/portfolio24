import Image from "next/image";
import Link from "next/link";

interface IndeBoxProps {
  title: string;
  titleSmall: string[];
  desc: string;
  link: string;
}

export const IndexBox = ({
  data,
  index,
  isHover,
}: {
  data: IndeBoxProps;
  index: number;
  isHover: number;
}) => {
  return (
    <Link
      href={data.link}
      className={`flex flex-col gap-[1.5rem] w-[22rem] cursor-pointer
      mobile:w-[16.75rem] mobile:gap-[1rem]
      ${isHover == index ? "text-white" : "text-black"}`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-2">
          <span className="font-pretendard text-[1.75rem] mobile:text-[1.5rem]">
            0{index + 1}
          </span>
          <div className="flex flex-col">
            {data.titleSmall.map((item, index) => (
              <span
                key={index}
                className="font-notoSerifTibetan opacity-60 text-[1.5rem] mobile:text-[1.125rem]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {isHover == index ? (
          <Image src="/svgs/whiteArrow.svg" alt="" width={30} height={30} />
        ) : (
          <Image src="/svgs/blackArrow.svg" alt="" width={30} height={30} />
        )}
      </div>
      <div className="flex flex-col gap-2 font-pretendard">
        <span className="text-[2rem] mobile:text-[1.5rem]">{data.title}</span>
        <span className="text-[1rem] opacity-75 mobile:text-[0.875rem]">
          {data.desc}
        </span>
      </div>
    </Link>
  );
};
