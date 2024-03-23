import Image from "next/image";
import Link from "next/link";
import BottomDeco from "../common/bottomDeco";

interface DetailSection1Props {
  title: string;
  titleEn: string;
  period: string;
  role: string;
  techStack: string[];
  desc: string[];
  meaning: string[];
}

const DetailSection1 = ({
  data,
  index,
}: {
  data: DetailSection1Props;
  index: number;
}) => {
  return (
    <section className="min-h-[67.5rem] h-max flex flex-col justify-between items-center p-[4rem] leading-normal mobile:min-h-[50.75rem] mobile:p-[3rem]">
      <div className="w-full flex items-center gap-8 font-notoSerifTibetan text-[1rem] mobile:text-[0.875rem] laptop:mb-[3rem] mobile:mb-[2rem] animate-fade1">
        <Image
          src="/svgs/blackArrow.svg"
          alt=""
          width={20}
          height={20}
          className="rotate-[-135deg]"
        />
        <div className="flex gap-4 mt-2">
          <Link href="/" className="hover:blur">
            {"<Home />"}
          </Link>
          <Link href="/indexList" className="hover:blur">
            {"<Index />"}
          </Link>
        </div>
      </div>
      <div
        className={`w-full flex justify-center items-center gap-[5rem] mb-[3rem] font-pretendard
          mobile:flex-col mobile:gap-[3rem] laptop:flex-col`}
      >
        <div className="flex flex-col gap-[3rem] laptop:flex-row mobile:gap-[2rem] animate-fade2">
          <div className="flex flex-col gap-2">
            <span className="text-[1.75rem] mobile:text-[1.5rem] laptop:text-[1.5rem]">
              0{index}
            </span>
            <span className="text-[2rem] mobile:text-[1.5rem] laptop:text-[1.75rem]">
              {data.title}
            </span>
            <span className="text-[1.25rem] font-notoSerifTibetan italic opacity-60 mobile:text-[1rem] laptop:text-[1rem]">
              {data.titleEn}
            </span>
            <span className="text-[1.125rem] laptop:text-[1rem] mobile:text-[0.875rem]">
              {data.period}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-[1.25rem] mobile:text-[1rem]">ROLE.</span>
              <span className="text-[1rem] opacity-70 mobile:text-[0.875rem]">
                {data.role}
              </span>
            </div>
            <div className="flex flex-col w-[18rem] gap-2">
              <span className="text-[1.25rem] mobile:text-[1rem]">
                TECH STACK.
              </span>
              {data.techStack.map((item, index) => (
                <span
                  key={index}
                  className="text-[1rem] opacity-70 mobile:text-[0.875rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 animate-fade3">
          <div className="flex justify-between items-center">
            <span className="font-notoSerifTibetan text-[1.25rem] mobile:text-[1.125rem]">
              {"<Description. />"}
            </span>
          </div>
          <div className="h-max max-h-[25rem] overflow-y-auto mobile:max-h-[13rem] laptop:max-h-[18rem] scrollCustom">
            <div className="flex flex-col gap-4 w-[20rem] font-pretendard text-[1rem] opacity-60 mobile:w-[18rem] mobile:gap-2 mobile:text-[0.875rem] laptop:w-[30rem]">
              {data.desc.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 animate-fade3">
          <div className="flex justify-between items-center">
            <span className="font-notoSerifTibetan text-[1.25rem] mobile:text-[1.125rem]">
              {"<Meaning. />"}
            </span>
          </div>
          <div className="h-max max-h-[25rem] overflow-y-auto mobile:max-h-[13rem] laptop:max-h-[18rem] scrollCustom">
            <div className="flex flex-col gap-4 w-[20rem] font-pretendard text-[1rem] opacity-60 mobile:w-[18rem] mobile:gap-2 mobile:text-[0.875rem] laptop:w-[30rem]">
              {data.meaning.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomDeco dark />
    </section>
  );
};

export default DetailSection1;
