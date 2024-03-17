"use client";

import { useRef } from "react";

import MainSection1 from "./components/main/mainSection1";
import MainSection2 from "./components/main/mainSection2";

export default function Home() {
  const section2Ref = useRef<HTMLDivElement>(null);
  const onSeciont2Click = () => {
    section2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="absolute z-10 top-0 left-0 animate-grow"></div>
      <main className="text-white bg-black w-screen max-w-[120rem]">
        <MainSection1 onSeciont2Click={onSeciont2Click} />
        <div className="animate-fade3">
          <MainSection2 section2Ref={section2Ref} />
        </div>
      </main>
    </>
  );
}
