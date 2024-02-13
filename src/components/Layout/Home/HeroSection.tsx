import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full mt-5 rounded-sm relative">
      <video src={"./mit.mp4"} autoPlay muted loop className="w-full h-fit" />
      <div className="absolute w-full h-full inset-0 bg-blend-multiply bg-opacity-50 bg-primary">
        <div className="w-full h-full flex flex-col justify-center items-center px-8">
          <p className="text-4xl font-bold text-white">
            Partner Focused. Data Driven. Results Oriented.
          </p>
          <p className="text-white text-center text-xl font-semibold">
            MIT Distribution orchestrates mission-critical activities across
            warehousing and transportation functions to transform discrete
            logistics tasks into unified, end-to-end processes.
          </p>
          <button className="mt-5 px-8 py-2 rounded-full bg-secondary">
            Speak With An Expert
          </button>
        </div>
      </div>
      <div className="bg-[#494949] absolute bottom-0 py-5 w-full px-5 text-white flex justify-center gap-3 items-center">
        <p className="border-r border-white px-3 font-semibold text-lg">
          BY THE NUMBERS
        </p>
        <p className="border-r border-white px-3 font-semibold text-lg">
          100k+ sites
        </p>
        <p className="border-r border-white px-3 font-semibold text-lg">
          1k+ Team Members
        </p>
        <p className="border-r border-white px-3 font-semibold text-lg">
          1M Shipments Managed
        </p>
        <p className="font-semibold text-lg">5B Annual Cases</p>
      </div>
    </div>
  );
}
