import Skeleton from "@/components/common/Skeletorn";
import Image from "next/image";
import React from "react";

export default function Network() {
  return (
    <Skeleton className=" relative w-full h-[40vh] sm:h-[100vh]">
      <div className="absolute inset-0 bg-primary bg-opacity-80 z-0"></div>
      <div className="w-full opacity-100 pt-8 flex flex-col text-white justify-center items-center z-10">
        <h3 className=" z-10 text-center font-bold text-3xl pb-3 ">
          North American Network
        </h3>
        <p className="pt-10  z-10 ">
          MIT Operates In 100+ Locations Across The United States And In Canada.
        </p>
        <div className="hidden md:block relative w-full  z-10 h-[400px] mt-8">
          <Image src={"/static/map.png"} alt="usa map" fill />
        </div>
      </div>
    </Skeleton>
  );
}
