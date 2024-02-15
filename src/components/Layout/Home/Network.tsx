import Image from "next/image";
import React from "react";

export default function Network() {
  return (
    <div
      className="mt-10 relative w-full h-[100vh]"
      style={{
        backgroundImage: `url("/static/bg_hp_warehouse_desktop (1).jpg")`,
        backgroundSize: "cover",
        zIndex: 0,
      }}
    >
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      <div className="absolute top-0 left-0 w-full pt-8 flex flex-col text-white justify-center items-center z-10">
        <h3 className="text-center font-bold text-3xl pb-3 ">
          North American Network
        </h3>
        <p className="pt-10">
          MIT Operates In 100+ Locations Across The United States And In Canada.
        </p>
        <div className="relative w-full h-[400px] mt-8">
          <Image src={"/static/mapp.png"} alt="usa map" fill />
        </div>
      </div>
    </div>
  );
}
